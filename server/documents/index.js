module.exports = ({
  profile,
  name,
  file,
  about,
  experienceList,
  educationList,
  skills,
}) => {
  let mySkills = "";

  skills?.forEach((element) => {
    mySkills =
      mySkills + `<p class="technology rounded float-left my-1">${element}</p>`;
  });

  let myExperience = "";

  experienceList?.forEach((element) => {
    myExperience =
      myExperience +
      `
        
        <div>
            <h3 class="float-left text-secondary">• </h3> <h3 class="ps-3 text-secondary">${
              element.title
            }</h3>
            <p class="m-0 ps-3">${element.company} • ${element.startMonth} ${
        element.startYear
      } ${`${
        element.isWorking
          ? " - Present"
          : " - " + element.endMonth + " " + element.endYear
      }`}</p>
            <p class="m-0 ps-3">${element.location}</p>
            <p class=" ps-3">${element.description}</p>
        </div>

        `;
  });

  let myEducation = "";

  educationList?.forEach((element) => {
    myEducation =
      myEducation +
      `
        
        <div>
            <h3 class="float-left text-secondary">• </h3> <h3 class="ps-3 text-secondary">${element.institute}</h3>
            <p class="m-0 ps-3">${element.degree} • ${element.fieldOfStudy} </p>
            <p class="ps-3">${element.startYear} - ${element.endYear} • Grade: ${element.grade}</p>
        </div>

        `;
  });

  return `<!DOCTYPE html>
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
              background: #757575;
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
                  <div class=" skills_box">
                      <h3 class="title_heading">Skills</h3>
                      <div class=" skills_list">
                          <span key="i" class=" skills_list_item">
                              ReactJs
                          </span>
                          <span key="i" class=" skills_list_item">
                              Redux
                          </span>
                          <span key="i" class=" skills_list_item">
                              JavaScript
                          </span>
                    
      
                      </div>
                  </div>
              </div>
              </div>
          </div>
      </div>
  </body>
  
  </html>`;
};