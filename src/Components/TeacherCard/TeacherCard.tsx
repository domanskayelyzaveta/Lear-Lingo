import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { SelectTeachers } from "../../redux/selectors";
import { Teacher } from "../../service/Api";
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
          <div>
            <img
              src={teacher.avatar_url}
              alt={`${teacher.name} ${teacher.surname}`}
            />
          </div>
          <div>
            <p>Languages</p>
            <h2>{teacher.name}</h2>
          </div>
          <p>Speaks:</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <svg>
            <use href=""></use>
          </svg>
        </div>
      ))}
    </>
  );
};

export default TeacherCard;
