import { Grid } from "@mui/material";
import React from "react";
import { BlockTitle } from "../../components/BlockTitle/ui";
import { Container } from "../../components/Container/ui";
import Filters from "../../components/Filters/ui";
import SmallCardCourse from "../../components/SmallCardCourse/ui";
import "./style.scss";

const courses = [
  { id: "1", title: "Special B-day podcast", price: 204, author: "javascript" },
  {
    id: "2",
    title:
      "Buttons with icons and label with icons and labe124 124 React.ReactElement aweqr",
    price: 124,
    author: "NestJS",
  },
  {
    id: "3",
    title: "React.ReactElement aweqr",
    price: 1033,
    author: "javascript",
  },
  {
    id: "4",
    title: "Dependency Inversion Principle",
    price: 666,
    author: "javascript",
  },
  {
    id: "5",
    title: "Для устойчивой системы характерны",
    price: 123,
    author: "javascript",
  },
];

const Catalog = () => {
  return (
    <Container>
      <div className="catalog">
        <Grid container spacing={4}>
          <Grid item md={4} lg={3} xl={2.5}>
            <Filters />
          </Grid>
          <Grid item md={8} lg={9} xl={9.5}>
            <BlockTitle
              title="По теме JavaScript"
              subTitle="Всего 24"
              marginTop="0"
            />
            <div className="catalog__course">
              {courses.map((course) => (
                <SmallCardCourse
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  author={course.author}
                  price={course.price}
                />
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Catalog;
