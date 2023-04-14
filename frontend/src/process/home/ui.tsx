import { BlockTitle } from "../../components/BlockTitle/ui"
import { Container } from "../../components/Container/ui"
import { ContainerTheme } from "../../components/ContainerTheme/ui"
import { CourseContainer } from "../../components/CourseContainer/ui"
import SmallCardCourse from "../../components/SmallCardCourse/ui"

const courses = [
    {id: '1', title: 'Special B-day podcast', price: 204, author: 'javascript'},
    {id: '2', title: 'Buttons with icons and label with icons and labe124 124 React.ReactElement aweqr', price: 124, author: 'NestJS'},
    {id: '3', title: 'React.ReactElement aweqr', price: 1033, author: 'javascript'},
    {id: '4', title: 'Dependency Inversion Principle', price: 666, author: 'javascript'},
    {id: '5', title: 'Для устойчивой системы характерны', price: 123, author: 'javascript'}
]

export const Home = () => {
    return (
        <>
            <CourseContainer />
            <Container>
                <BlockTitle title="Популярные темы для изучения" subTitle="Трендовые технологии" marginTop="30px" />
                <ContainerTheme />
                <BlockTitle title="Популярные курсы" subTitle="Самое интересное" marginTop="30px" />
                <div className='catalog__course'>
                    {courses.map(course => <SmallCardCourse key={course.id} id={course.id} title={course.title} author={course.author} price={course.price} />)}
                </div>
            </Container>
        </>
    )
}