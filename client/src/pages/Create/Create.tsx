import React from "react";

//import styles from "./Create.module.css";

type Props = {};

export const Create: React.FC<Props> = ({}) => {
    return (
        <div>
            <form>
                <input type='text' />
                <button type='submit'>submit</button>
            </form>
        </div>
    );
};
