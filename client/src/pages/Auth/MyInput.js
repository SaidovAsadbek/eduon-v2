import { useState } from "react";

function MyInput({
    colors = {
        default: "rgb(217 217 217)",
        focused: "rgb(25, 118, 210)",
        hovered: "black",
    },
    legendName,
    ...rest
}) {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    console.log(rest);
    return (
        <div className="mb-3 position-relative">
            <input
                {...rest}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                    borderColor: isFocused
                        ? colors.focused
                        : isHovered
                        ? colors.hovered
                        : colors.default,
                }}
            />
            <span
                className={`legend 
            ${
                isFocused
                    ? "enter-handle"
                    : "" || rest.value !== ""
                    ? "outside"
                    : ""
            }`}
            >
                {legendName}
            </span>
        </div>
    );
}

export default MyInput;
