import PropTypes from "prop-types";

function Student (props) {

    return (
        <div className = "student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is Employed: {props.isEmployed ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isEmployed: PropTypes.bool,
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isEmployed: false,
}

export default Student 