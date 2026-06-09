import React from "react";
import styles from "./Education_details.module.css";
import { useAppSelector } from "@/redux/redux-hooks";
import { educationInfoState } from "@/redux/features/educationSlice";

interface EducationType {
  [key: string]: string | number;
  id: string;
  degree: string;
  institute: string;
  startDate: string;
  endDate: string;
  place: string;
  marks: string;
}
function Education_details() {
  const { qualificationDataList } = useAppSelector(
    (state) => state.educationReducer
  );

  const item: EducationType = { ...qualificationDataList[0] };

  return (
    <div className={styles.common_details_box}>
      <h3 className={styles.title_heading}>Education</h3>
      <div className={styles.education_list}>
        {qualificationDataList.length > 0 &&
        Object.keys(item).every((c) => item[c] != "") ? (
          qualificationDataList.map((cItem: educationInfoState) => {
            const nCItem: EducationType = { ...cItem };

            if (Object.keys(nCItem).some((c) => !nCItem[c])) return null;

            return (
              <div key={cItem.id} className={styles.education_list_item}>
                <div className={styles.degree}>{cItem.degree}</div>
                <div className={styles.institute}>{cItem.institute}</div>
                <div className={styles.place_date_box}>
                  <div className={styles.date}>
                    {cItem.startDate} - {cItem.endDate}
                  </div>
                  <div className={styles.location}>{cItem.place}</div>
                </div>
                <div className={styles.marks}>{cItem.marks}</div>
              </div>
            );
          })
        ) : (
          <>
            <div className={styles.education_list_item}>
              <div className={styles.degree}>BTech (CSE)</div>
              <div className={styles.institute}>
                Centeral University of Haryana
              </div>
              <div className={styles.place_date_box}>
                <div className={styles.date}>07/2017 - 07/2021</div>
                <div className={styles.location}>Mahendragarh, haryana</div>
              </div>
              <div className={styles.marks}>7.7 cgpa</div>
            </div>
            <div className={styles.education_list_item}>
              <div className={styles.degree}>Higher Secondary Education</div>
              <div className={styles.institute}>
                GOVT. DARBAR SEN.SEC. SCHOOL
              </div>
              <div className={styles.place_date_box}>
                <div className={styles.date}>07/2015 - 07/2016</div>
                <div className={styles.location}>Sambhar Lake, Jaipur</div>
              </div>
              <div className={styles.marks}>82.00%</div>
            </div>
            <div className={styles.education_list_item}>
              <div className={styles.degree}>Secondary Education (RBSE)</div>
              <div className={styles.institute}>
                GOVT. DARBAR SEN.SEC. SCHOOL
              </div>
              <div className={styles.place_date_box}>
                <div className={styles.date}>07/2013 - 07/2014</div>
                <div className={styles.location}>Sambhar Lake, Jaipur</div>
              </div>
              <div className={styles.marks}>85.67%</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Education_details;
