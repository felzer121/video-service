import { CardCourse } from "../../components/CardCourse/ui"
import { CourseContainer } from "../../components/CourseContainer/ui"
import { Header } from "../../components/Header"
import { PageWrapper } from "../../components/PageWrapper"

export const Home = () => {
    return (
        <PageWrapper>
            <Header />
            <CourseContainer />
        </PageWrapper>
    )
}