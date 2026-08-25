export type Education_Details = {
	name: string;
	location: string;
	degree: string;
	startDate: string;
	endDate: string;
	score: string;
	gradingSystem: 'CGPA' | 'Percentage';
	logo: string
}

export const CONSTANTS_EDUCATION: Education_Details[] = [
	{
		name: 'Central University of Haryana, Mahendergarh',
		location: 'Mahendergarh, Haryana',
		degree: 'BTech CSE',
		startDate: '2017',
		endDate: '2021',
		gradingSystem: 'CGPA',
		score: '7.7',
		logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGb4vnagks9JQ/company-logo_100_100/company-logo_100_100/0/1683701663066/central_university_of_haryana_mahendergarh_logo?e=1788998400&v=beta&t=HTVeQ3_sxfqV6_568K6dO3x0BUunP3pR9DC23fkYHNE'
	},
	{
		name: 'Govt Darbar Sr. Sec. School',
		location: 'Sambhar Lake, Jaipur',
		degree: 'Higher Secondary Ecucation',
		startDate: '2013',
		endDate: '2014',
		gradingSystem: "Percentage",
		score: '82%',
		logo: 'https://media.licdn.com/dms/image/v2/D560BAQGYeUxoQjcUqg/company-logo_100_100/B56Zy3ijAdHQAU-/0/1772605813516/govtvccp_logo?e=1788998400&v=beta&t=WlK6tyIGkAfsIBcuRSovxx3mQ0mISBHh5zY0SjO1UkQ'
	},
	{
		name: 'Govt Darbar Sr. Sec. School',
		location: 'Sambhar Lake, Jaipur',
		degree: 'Secondary Ecucation',
		startDate: '2015',
		endDate: '2016',
		gradingSystem: 'Percentage',
		score: '85.67%',
		logo: 'https://media.licdn.com/dms/image/v2/D560BAQGYeUxoQjcUqg/company-logo_100_100/B56Zy3ijAdHQAU-/0/1772605813516/govtvccp_logo?e=1788998400&v=beta&t=WlK6tyIGkAfsIBcuRSovxx3mQ0mISBHh5zY0SjO1UkQ'
	},

];
