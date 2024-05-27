const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");

const puppeteer = require("puppeteer");
const fs = require("fs");
const convertHTMLToPDF = require("pdf-puppeteer");

const pdfTemplate = require("./documents");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const options = {
  height: "42cm",
  width: "80.7cm",
  timeout: "6000",
  childProcessOptions: {
    env: {
      OPENSSL_CONF: "/dev/null",
    },
  },
};
app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("result1.pdf", (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});

async function exportWebsiteAsPdf(html, outputPath) {
  // Create a browser instance
  const browser = await puppeteer.launch({
    headless: "new",
  });

  // Create a new page
  const page = await browser.newPage();

  page.setDefaultTimeout(50000);
  await page.setContent(html, { waitUntil: "domcontentloaded" });

  // To reflect CSS used for screens instead of print
  await page.emulateMediaType("screen");

  // Download the PDF
  const PDF = await page.pdf({
    path: outputPath,
    margin: { top: "100px", right: "50px", bottom: "100px", left: "50px" },
    printBackground: true,
    format: "a4",
  });

  // Close the browser instance
  await browser.close();

  return PDF;
}

app.post("/generate-pdf", (req, res) => {
  const html = fs.readFileSync("./test.html", "utf-8");

  console.log("html", html);

  exportWebsiteAsPdf(html, "./resultNew.pdf")
    .then(() => {
      res.send(Promise.resolve());
    })
    .catch((error) => {
      console.error("Error creating PDF:", error);
      res.send(Promise.reject());
    });
});

app.post("/generating-pdf", (req, res) => {
  const callback = function (pdf) {
    // do something with the PDF like send it as the response
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdf);
  };

  /**
   *    Usage
   *    @param html - This is the html to be converted to a pdf
   *    @param callback - Do something with the PDF
   *    @param [options] - Optional parameter to pass in Puppeteer PDF options
   *    @param [puppeteerArgs] - Optional parameter to pass in Puppeter arguments
   *    @param [remoteContent] - Default true. Optional parameter to specify if there is no remote content. Performance will be opitmized for no remote content.
   */
  convertHTMLToPDF(
    `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="utf-8" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  
      <!-- Option 1: Include in HTML -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
      <style>
          .main_container {
  
              /* border: 1px solid red; */
          }
  
          .resume_page {
              border-radius: 5px;
              border: 1px solid red;
  
              width: 900px;
              height: 900px;
              margin: 0 auto;
          }
  
          .img_box img {
              width: 120px;
              height: 120px;
  
              min-width: 120px;
              min-height: 120px;
  
              border-radius: 50%;
  
              margin-right: 2rem;
          }
  
          .heading_part {
              display: flex;
              align-items: center;
  
              padding: 2.5rem;
          }
  
          .heading_info {
              /* display: flex; */
          }
  
          .heading_info .name {
              font-size: 3rem;
              line-height: 3rem;
              font-weight: 400;
          }
  
          .heading_info .post {
              font-size: 2rem;
              line-height: 3rem;
              font-weight: 500;
              opacity: 0.5;
          }
  
          .heading_info .intro {
              font-size: 1.5rem;
              line-height: 1.5rem;
          }
  
          /* contact_info */
  
          .contact_info {
              display: flex;
              justify-content: space-evenly;
  
              background: #e5e5e5;
  
              padding: 1.5rem;
          }
  
          .contact_info .contact_box {
              display: flex;
              align-items: center;
              justify-content: center;
  
              font-size: 1rem;
          }
  
          .contact_info .contact_box svg {
              margin-right: 0.5rem;
              width: 15px;
              height: 15px;
          }
  
          .infomation_box {
              padding: 2.5rem;
              display: flex;
          }
  
          .left_box {
              flex: 1;
              margin-right: 5rem;
          }
  
          .right_box {
              flex: 1;
          }
  
          /* education */
  
          .title_heading {
              font-size: 2rem;
              line-height: 2.2rem;
              font-weight: 500;
              margin-bottom: 1rem;
          }
  
          .degree {
              font-size: 1.5rem;
              line-height: 1.5rem;
              font-weight: 500;
          }
  
          .institute {
              font-size: 1.5rem;
              line-height: 2rem;
              font-weight: 400;
          }
  
          .place_date_box {
              display: flex;
              justify-content: space-between;
  
              font-size: 1.2rem;
              line-height: 1.7rem;
              font-weight: 400;
              color: rgba(102, 103, 102, 1);
          }
  
          .marks {
              font-size: 1.2rem;
              line-height: 1.7rem;
              font-weight: 500;
          }
  
          .education_list_item {
              margin-bottom: 1rem;
          }
  
          /* skills */
  
          .skills_list {
              display: flex;
              flex-wrap: wrap;
          }
  
          .skills_list_item {
              background: green;
              padding: 0.5rem 1rem;
              border-radius: 10px;
              color: #fff;
  
              font-size: 1.2rem;
  
              margin-right: 0.7rem;
              margin-bottom: 0.5rem;
          }
      </style>
      <title>Resume</title>
  </head>
  
  <body>
      <div id="divToPrint" class="resume_container">
          <div class="resume_page" ref="docToPrint">
              <div class=" heading_part">
                  <div class="img_box">
                      <Image src="/images/profile-pic.jpg" alt="" width=" 250" height=" 250" />
                  </div>
                  <div class="heading_info">
                      <h1 class=" name">VAIBHAV KUMAR</h1>
                      <h3 class="post">ReactJs Developer</h3>
                      <p class=" intro">
                          I am an experienced frontend developer weaved with the skills
                          such as React, Redux, JavaScript, NEXTJS, HTML, CSS, SCSS, Git.
                          Finding a good opportunity to learn more and grow my skillset.
                      </p>
                  </div>
              </div>
              <div class="contact_info">
                  <div class=" contact_box">
                      <i class="bi-alarm"></i>
                      <span>vaibhavk2474@gmail.com</span>
                  </div>
                  <div class="contact_box">
                      <PhoneIphoneIcon />
                      <i class="bi-alarm"></i>
                      <span>+91 8094270183</span>
                  </div>
                  <div class=" contact_box">
                      <i class="bi-alarm"></i>
                      <span>Sambhar Lake, jaipur(303604), Rajasthan, India</span>
                  </div>
              </div>
  
              <div class="infomation_box">
                  <div class=" left_box">
                      <div class="education_box">
                          <h3 class=" title_heading">Education</h3>
                          <div class="education_list">
                              <div class=" education_list_item">
                                  <div class="degree">BTech (CSE)</div>
                                  <div class=" institute">
                                      Centeral University of Haryana
                                  </div>
                                  <div class="place_date_box">
                                      <div class=" date">07/2017 - 07/2021</div>
                                      <div class="location">
                                          Mahendragarh, haryana
                                      </div>
                                  </div>
                                  <div class=" marks">7.7 cgpa</div>
                              </div>
                              <div class="education_list_item">
                                  <div class=" degree">
                                      Higher Secondary Education
                                  </div>
                                  <div class="institute">
                                      GOVT. DARBAR SEN.SEC. SCHOOL
                                  </div>
                                  <div class=" place_date_box">
                                      <div class="date">07/2015 - 07/2016</div>
                                      <div class=" location">
                                          Sambhar Lake, Jaipur
                                      </div>
                                  </div>
                                  <div class="marks">82.00%</div>
                              </div>
                              <div class=" education_list_item">
                                  <div class="degree">
                                      Secondary Education (RBSE)
                                  </div>
                                  <div class=" institute">
                                      GOVT. DARBAR SEN.SEC. SCHOOL
                                  </div>
                                  <div class="place_date_box">
                                      <div class=" date">07/2013 - 07/2014</div>
                                      <div class="location">
                                          Sambhar Lake, Jaipur
                                      </div>
                                  </div>
                                  <div class=" marks">85.67%</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="right_box">
                      <div class="skills_box">
                          <h3 class="title_heading">Skills</h3>
                          <div class="skills_list">
                              <span class="skills_list_item">
                                  ReactJs
                              </span>
                              <span class="skills_list_item">
                                  Redux
                              </span>
                              <span class="skills_list_item">
                                  JavaScript
                              </span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </body>
  
  </html>`,
    callback,
    null,
    null,
    true
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
