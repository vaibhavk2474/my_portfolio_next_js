import React, { useState } from "react";
import styles from "./EducationForm.module.css";
import { useAppDispatch, useAppSelector } from "@/redux/redux-hooks";
import {
  educationInfoState,
  postEducationState,
} from "@/redux/features/educationSlice";

function EducationForm() {
  // const [qualificationList, setQualificationList] = useState<
  //   educationInfoState[]
  // >([
  //   {
  //     id: `${new Date().getTime()}`,
  //     degree: "",
  //     institute: "",
  //     startDate: "",
  //     endDate: "",
  //     place: "",
  //     marks: "",
  //   },
  // ]);

  const { qualificationDataList: qualificationList } = useAppSelector(
    (state) => state.educationReducer
  );

  const dispatch = useAppDispatch();

  const [isFocused, setIsFocused] = useState<string | number>("");

  const addMoreHandler = () => {
    const newEntry = {
      id: `${new Date().getTime()}`,
      degree: "",
      institute: "",
      startDate: "",
      endDate: "",
      place: "",
      marks: "",
    };
    dispatch(
      postEducationState({
        qualificationDataList: [...qualificationList, newEntry],
      })
    );

    // setQualificationList((prev) => [...prev, newEntry]);
  };

  // const { qualificationDataList } = useAppSelector(
  //   (state) => state.educationReducer
  // );

  return (
    <div className={styles.formContainer}>
      {qualificationList.map((cItem) => (
        <EducationData
          key={cItem.id}
          educationData={cItem}
          // setQualificationList={setQualificationList}
          qualificationList={qualificationList}
          // isFromList={true}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
        />
      ))}

      {/* <EducationData
        setQualificationList={setQualificationList}
        educationData={{
          id: "",
          degree: "",
          institute: "",
          startDate: "",
          endDate: "",
          place: "",
          marks: "",
        }}
      /> */}

      <div>
        <div>
          <button type="button" onClick={addMoreHandler}>
            Add More
          </button>
        </div>
        {/* <button type="button" onClick={undefined}>
          Save
        </button> */}

        {/* <button type="button" onClick={undefined}>
          Add
        </button> */}
      </div>
    </div>
  );
}
const EducationData: React.FC<{
  isFromList?: boolean;
  educationData: educationInfoState;
  qualificationList: educationInfoState[];
  // setQualificationList: React.Dispatch<
  //   React.SetStateAction<educationInfoState[]>
  // >;
  isFocused: string | number;
  setIsFocused: React.Dispatch<React.SetStateAction<string | number>>;
}> = ({
  educationData,
  // setQualificationList,
  qualificationList,
  isFromList = false,
  isFocused,
  setIsFocused,
}) => {
  const [degree, setDegree] = useState(educationData.degree);
  const [institute, setInstitute] = useState(educationData.institute);
  const [startDate, setStartDate] = useState(educationData.startDate);
  const [endDate, setEndDate] = useState(educationData.endDate);
  const [place, setPlace] = useState(educationData.place);
  const [marks, setMarks] = useState(educationData.marks);

  // const [isFocused, setIsFocued] = useState(false);

  const dispatch = useAppDispatch();

  const handleSave = () => {
    // setQualificationList((prev) => {
    //   const updatedDataList = prev.map((cItem) => {
    //     if (cItem.id == educationData.id) {
    //       return {
    //         ...cItem,
    //         degree,
    //         institute,
    //         startDate,
    //         endDate,
    //         place,
    //         marks,
    //       };
    //     } else {
    //       return cItem;
    //     }
    //   });
    //   return updatedDataList;
    // });

    const updatedDataList = qualificationList.map((cItem) => {
      if (cItem.id == educationData.id) {
        return {
          ...cItem,
          degree,
          institute,
          startDate,
          endDate,
          place,
          marks,
        };
      } else {
        return cItem;
      }
    });
    dispatch(postEducationState({ qualificationDataList: updatedDataList }));

    // setDegree("");
    // setInstitute("");
    // setStartDate("");
    // setEndDate("");
    // setPlace("");
    // setMarks("");
    // dispatch(
    //   postEducationState({
    //     id: `${new Date().getTime()}`,
    //     degree,
    //     institute,
    //     startDate,
    //     endDate,
    //     place,
    //     marks,
    //   })
    // );
  };

  const handleDelete = (id: string | number) => {
    if (qualificationList.length <= 1) {
      return;
    }

    const updatedDataList = qualificationList.filter((cItem) => cItem.id != id);
    dispatch(postEducationState({ qualificationDataList: updatedDataList }));

    // setQualificationList((prev) => prev.filter((cItem) => cItem.id != id));
  };

  const shouldShow = isFocused == educationData.id;

  return (
    <div
      onMouseEnter={() => {
        setIsFocused(educationData.id);
      }}
      onMouseLeave={() =>
        setIsFocused(qualificationList[qualificationList.length - 1].id)
      }
      className={styles.formContainer}
    >
      <label className={styles.label} tabIndex={0}>
        Graduate Certificate
      </label>
      <input
        type="text"
        value={degree}
        onChange={(e) => setDegree(e.target.value)}
        className={styles.input}
        // onFocus={}
      />

      <label className={styles.label} tabIndex={0}>
        University/College Name
      </label>
      <input
        type="text"
        value={institute}
        onChange={(e) => setInstitute(e.target.value)}
        className={styles.input}
      />

      <label className={styles.label} tabIndex={0}>
        Place Name
      </label>
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        className={styles.input}
      />
      <label className={styles.label} tabIndex={0}>
        Start Date
      </label>
      <input
        type="text"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className={styles.input}
      />

      <label className={styles.label} tabIndex={0}>
        End Date
      </label>
      <input
        type="text"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className={styles.input}
      />

      <label className={styles.label} tabIndex={0}>
        CGPA/%
      </label>
      <input
        type="text"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        className={styles.input}
      />

      {shouldShow && (
        <div tabIndex={0}>
          <button type="button" onClick={handleSave}>
            Save
          </button>
          <button type="button" onClick={() => handleDelete(educationData.id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
export default EducationForm;
