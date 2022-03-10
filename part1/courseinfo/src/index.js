import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <div>
            <Header course={course} />
            <Content
                exercises1={exercises1}
                exercises2={exercises2}
                exercises3={exercises3}
                part1={part1}
                part2={part2}
                part3={part3}
            />
            <Total
                exercises1={exercises1}
                exercises2={exercises2}
                exercises3={exercises3}
            />
        </div>
    );
};

const Header = ({ course }) => <h1>{course}</h1>;

const Content = (props) => (
    <div>
        <Part exercise={props.exercises1} part={props.part1} />
        <Part exercise={props.exercises2} part={props.part2} />
        <Part exercise={props.exercises3} part={props.part3} />
    </div>
);

const Part = ({ exercise, part }) => (
    <p>
        {exercise} {part}
    </p>
);

const Total = (props) => (
    <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
);

ReactDOM.render(<App />, document.getElementById("root"));
