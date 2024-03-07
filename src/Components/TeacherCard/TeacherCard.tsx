import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { SelectTeachers } from "../../redux/selectors";
import { Teacher } from "../../service/Api";
import { Image, ImgDiv, StyledOnline } from "./TeacherCard.styled";
import { getTeachersThunk } from "../../redux/thunks";

const TeacherCard = () => {
  const teachersData = useAppSelector(SelectTeachers);
  console.log(teachersData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTeachersThunk());
  }, [dispatch]);

  return (
    <>
      {teachersData.map((teacher: Teacher, index: number) => (
        <div key={index}>
          <ImgDiv>
            <Image
              src={teacher.avatar_url}
              alt={`${teacher.name} ${teacher.surname}`}
            />
          </ImgDiv>
          <div>
            <StyledOnline></StyledOnline>
            <p>Languages:</p>
            <h2>{teacher.name}</h2>
            <div>
              {/* <p>Speaks:</p> */}
              <ul>
                <span>Speaks:</span>
                {teacher.languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </div>
          <p>
            <span>Lesson info:</span>
            {teacher.lesson_info}
          </p>
          <ul>
            <span>Conditions:</span>
            {teacher.conditions.map((condition, index) => (
              <li key={index}>{condition}</li>
            ))}
          </ul>
          <button>Read more</button>
          <ul>
            {teacher.levels.map((level, index) => (
              <li key={index}>{level}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default TeacherCard;
