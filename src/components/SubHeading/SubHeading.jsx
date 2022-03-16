import React from "react"
import { images } from "../../constants"

const SubHeading = ({ title }) => (
    <div style={{ marginBottom: "1rem" }}>
        <p className="p__cormorant" style={{ color: "var(--color-white)" }}>
            {title}
        </p>
        <img src={images.spoon} alt="Spoon" className="spoon__img" />
    </div>
)

export default SubHeading
