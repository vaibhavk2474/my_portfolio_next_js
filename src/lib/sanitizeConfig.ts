// lib/sanitizeConfig.ts
import type { IFilterXSSOptions } from 'xss';

// ============================================================================
// 1. SINGLE SOURCE OF TRUTH (Immutable Primitives)
// ============================================================================
export const ALLOWED_TAGS = [
    'p', 'br', 'b', 'i', 'strong', 'em', 'u', 's', 'strike',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li', 'blockquote', 'hr',
    'a', 'span',
] as const;

export const ALLOWED_ATTRS = ['href', 'target', 'rel', 'style', 'class'] as const;

export const ALLOWED_SCHEMES = ['http', 'https', 'mailto', 'tel'] as const;

export type AllowedTag = (typeof ALLOWED_TAGS)[number];
export type AllowedAttr = (typeof ALLOWED_ATTRS)[number];

// ============================================================================
// 2. FRONTEND CONFIGURATION (DOMPurify)
// ============================================================================
// Regex matching only allowed protocol schemes (case-insensitive)
const PROTOCOL_REGEX = new RegExp(
    `^(?:(?:${ALLOWED_SCHEMES.join('|')}):|[^a-z]|[a-z+.\\-]+(?:[^a-z+.\\-:]|$))`,
    'i'
);

export const DOMPURIFY_CONFIG = {
    ALLOWED_TAGS: [...ALLOWED_TAGS],
    ALLOWED_ATTR: [...ALLOWED_ATTRS],
    ALLOWED_URI_REGEXP: PROTOCOL_REGEX,
};

// ============================================================================
// 3. BACKEND CONFIGURATION (xss)
// ============================================================================
// Declarative dictionary construction: maps every tag to allowed attributes
const xssWhiteList: Record<AllowedTag, AllowedAttr[]> = Object.fromEntries(
    ALLOWED_TAGS.map((tag) => [tag, [...ALLOWED_ATTRS]])
) as Record<AllowedTag, AllowedAttr[]>;

export const XSS_BACKEND_CONFIG: IFilterXSSOptions = {
    whiteList: xssWhiteList,
    stripIgnoreTag: true,
    stripIgnoreTagBody: ['script', 'style', 'xml', 'iframe', 'object'],
    css: false, // Prevents CSS expression/injection via inline style strings

    /**
     * Custom attribute value validator:
     * Strips malicious URI schemes (e.g. javascript:, data:, vbscript:)
     */
    safeAttrValue: (tag, name, value) => {
        if (name === 'href' || name === 'src') {
            // Decode URI components & normalize control chars to prevent obfuscation bypasses
            const sanitized = value.replace(/[\u0000-\u001F\u007F-\u009F\s+]/g, '').toLowerCase();

            const isAllowedProtocol = ALLOWED_SCHEMES.some((scheme) =>
                sanitized.startsWith(`${scheme}:`)
            );

            const isRelativeOrHash = value.startsWith('/') || value.startsWith('#');

            return isAllowedProtocol || isRelativeOrHash ? value : '';
        }

        // Auto-protect external links against reverse tabnabbing
        if (name === 'target' && value === '_blank') {
            return '_blank';
        }

        return value;
    },
};