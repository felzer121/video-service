import { CardCourse } from "../../components/CardCourse/ui"
import { CourseContainer } from "../../components/CourseContainer/ui"
import { Header } from "../../components/Header/ui"
import { PageWrapper } from "../../components/PageWrapper/ui"

export const Home = () => {
    return (
        <PageWrapper>
            <Header />
            <CourseContainer />
        </PageWrapper>
    )
}