import Filter from "../../Components/Filter/Filter";
import TeacherCard from "../../Components/TeacherCard/TeacherCard";
import { Container, TeacherPageWrapper } from "./Teachers.styled";

const Teachers = () => {
  return (
    <TeacherPageWrapper>
      <Container>
        <Filter/>
        <TeacherCard />
      </Container>
    </TeacherPageWrapper>
  );
};

export default Teachers;
