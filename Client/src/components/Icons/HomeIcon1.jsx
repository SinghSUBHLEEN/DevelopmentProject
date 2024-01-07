import * as React from "react";
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 64 64"
        {...props}
    >
        <title>{"building"}</title>
        <path
            d="m11.129 45-2.948 2.948M8.181 45l2.948 2.948"
            style={{
                fill: "none",
                stroke: "#3c2420",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
        <circle
            cx={35.5}
            cy={26.5}
            r={22.5}
            style={{
                fill: "#eaeaea",
            }}
        />
        <path
            d="M42.256 62A109.67 109.67 0 0 0 44 42c0-22.091-5.82-40-13-40S18 19.909 18 42a109.67 109.67 0 0 0 1.744 20Z"
            style={{
                fill: "#e5efef",
                stroke: "#3c2420",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
        <path
            d="M18.462 31.432A119.78 119.78 0 0 0 18 42a109.67 109.67 0 0 0 1.744 20h9.11c-5.954-9.956-8.919-21.52-10.392-30.568ZM23.774 8.747c.689 13.786 4.316 35.258 18.765 51.634A111.6 111.6 0 0 0 44 42c0-1.127-.019-2.241-.049-3.344C34.759 27.109 31.49 12.585 30.393 2.047c-2.443.346-4.71 2.765-6.619 6.7Z"
            style={{
                fill: "#9dc1e4",
                stroke: "#3c2420",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
        <path
            d="M19.537 60.848c7.5-6.026 15.964-16.019 23.43-32.591M39.365 12.484c-4.279 6.932-11.443 16.629-21.182 23.223M59 62H5"
            style={{
                fill: "none",
                stroke: "#3c2420",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
        <circle
            cx={49.5}
            cy={26.5}
            r={1.069}
            style={{
                fill: "#3c2420",
            }}
        />
        <circle
            cx={56.5}
            cy={12.5}
            r={2.5}
            style={{
                fill: "none",
                stroke: "#3c2420",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
            }}
        />
    </svg>
);
export default SvgComponent;
