import styles from "./Button.module.css";

function Button () {

    const styleButton = {
        backgroundColor: "hsl(226, 87%, 57%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "point",
    }

    return (
        <button className={styles.button} style={styleButton}>Click Me!</button>
    )
}

export default Button