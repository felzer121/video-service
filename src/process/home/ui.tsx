import { BlockTitle } from "../../components/BlockTitle/ui"
import { CardCourse } from "../../components/CardCourse/ui"
import { Container } from "../../components/Container/ui"
import { ContainerTheme } from "../../components/ContainerTheme/ui"
import { CourseContainer } from "../../components/CourseContainer/ui"
import { Header } from "../../components/Header/ui"
import { PageWrapper } from "../../components/PageWrapper/ui"

export const Home = () => {
    return (
        <>
            <CourseContainer />
            <Container>
                <BlockTitle title="Популярные темы для изучения" subTitle="Трендовые технологии" marginTop="30px" />
                <ContainerTheme />
            </Container>
        </>
    )
}