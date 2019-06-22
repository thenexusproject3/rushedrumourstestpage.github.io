/*
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import React from "react";
import classNames from "classnames";
import { t } from "@library/utility/appUtils";

const currentColorFill = {
    fill: "currentColor",
};

const leftChevronPath =
    "M3.621,10.5l7.94-7.939A1.5,1.5,0,0,0,9.439.439h0l-9,9a1.5,1.5,0,0,0,0,2.121h0l9,9a1.5,1.5,0,0,0,2.122-2.122Z";

const horizontalChevronViewBox = (centred: boolean) => {
    return centred ? "-8 -4 30 30" : "0 0 24 24";
};

export function rightChevron(className?: string, centred: boolean = false) {
    const title = `>`;
    return (
        <svg
            className={classNames("icon", "icon-chevronRight", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={horizontalChevronViewBox(centred)}
            aria-hidden="true"
            style={{ transform: "scaleX(-1)", transformOrigin: "50% 50%" }}
        >
            <title>{title}</title>
            <path
                transform="translate(0 1.75)"
                className="icon-chevronRightPath"
                d={leftChevronPath}
                style={currentColorFill}
            />
        </svg>
    );
}

export function leftChevron(className?: string, centred: boolean = false) {
    const title = `<`;
    return (
        <svg
            className={classNames("icon", "icon-chevronLeft", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox={horizontalChevronViewBox(centred)}
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                transform="translate(0 1.75)"
                className="icon-chevronLeftPath"
                d={leftChevronPath}
                style={currentColorFill}
            />
        </svg>
    );
}

export function leftChevronCompact(className?: string) {
    const title = `<`;
    return (
        <svg
            className={classNames("icon-chevronLeftCompact", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 21"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path d={leftChevronPath} style={currentColorFill} />
        </svg>
    );
}

export function bottomChevron(className?: string) {
    const title = `↓`;
    return (
        <svg
            className={classNames("icon-chevronLeftCompact", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6.606 11.2"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path d={leftChevronPath} transform="translate(-8.4 -6.6)" style={currentColorFill} />
        </svg>
    );
}

export function close(className?: string) {
    const title = t("Close");
    return (
        <svg
            className={classNames("icon", "icon-close", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 10 10"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                fill="currentColor"
                d="M3.553,4.984.386,1.841A1.041,1.041,0,0,1,.241.375L.248.366.264.353h0A1.116,1.116,0,0,1,1.8.353h0L4.957,3.5,8.124.353a1.061,1.061,0,0,1,1.49-.09h0l.062.059h0a1.043,1.043,0,0,1,0,1.467h0L6.509,4.928,9.676,8.075a1.045,1.045,0,0,1,.036,1.476l-.006.006a1.062,1.062,0,0,1-1.424.09L5.115,6.5,1.948,9.647A1.115,1.115,0,0,1,.4,9.72,1.043,1.043,0,0,1,.224,8.256l.007-.008h0C.25,8.225.269,8.2.29,8.181h0Z"
            />
        </svg>
    );
}

export function closeCompact(className?: string) {
    return close(classNames(className, "icon-closeCompact"));
}

export function clear(className?: string, noPadding: boolean = false) {
    const title = t("Clear");
    return (
        <svg
            className={classNames("icon", "icon-clear", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                fill="currentColor"
                d="M12,5a7,7,0,1,0,7,7A7,7,0,0,0,12,5Zm2.873,5.244L13.118,12l1.755,1.756a.337.337,0,0,1,0,.479l-.638.638a.337.337,0,0,1-.479,0L12,13.118l-1.756,1.755a.337.337,0,0,1-.479,0l-.638-.638a.337.337,0,0,1,0-.479L10.882,12,9.127,10.244a.337.337,0,0,1,0-.479l.638-.638a.337.337,0,0,1,.479,0L12,10.882l1.756-1.755a.337.337,0,0,1,.479,0l.638.638A.337.337,0,0,1,14.873,10.244Z"
            />
        </svg>
    );
}

export function check(className?: string) {
    const title = `✓`;
    return (
        <svg
            className={classNames("icon", "icon-check", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <title>{title}</title>
            <polygon fill="currentColor" points="5,12.7 3.6,14.1 9,19.5 20.4,7.9 19,6.5 9,16.8" />
        </svg>
    );
}

export function dropDownMenu(className?: string) {
    const title = `…`;
    return (
        <svg
            className={classNames("icon", "icon-dropDownMenu", className)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <title>{title}</title>
            <circle cx="5.7" cy="12" r="2" fill="currentColor" />
            <circle cx="18.3" cy="12" r="2" fill="currentColor" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
    );
}

export function newFolder(className?: string, title: string = t("New Folder")) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames("icon", "icon-dropDownMenu", className)}
            viewBox="0 0 22 19"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                d="M1,15.066V3.77Q1,1,3.548,1H9.12L11.3,3.769h7.286q2.372-.083,2.372,2.6v8.7q0,3.205-2.372,3.206H3.548Q1,18.272,1,15.066Z"
                style={{ fill: "none", stroke: "currentColor", strokeWidth: "1.2px" }}
            />
            <path
                d="M10.5,8v6m3-3h-6"
                style={{ fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeWidth: "1.2px" }}
            />
        </svg>
    );
}

export function categoryIcon(className?: string) {
    const title = t("Folder");
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames("icon", "icon-categoryIcon", className)}
            viewBox="0 0 24 24"
            role="img"
            aria-label={title}
        >
            <title>{title}</title>
            <path
                d="M5.5,19 L18.5,19 C19.3284271,19 20,18.3284271 20,17.5 L20,8.5 C20,7.67157288 19.3284271,7 18.5,7 L12,7 L10.2222222,5 L5.5,5 C4.67157288,5 4,5.67157288 4,6.5 L4,17.5 C4,18.3284271 4.67157288,19 5.5,19 Z"
                fill="currentColor"
            />
        </svg>
    );
}

export function checkCompact(className?: string) {
    const title = `✓`;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={classNames("icon", "icon-selectedCategory", className)}
            viewBox="0 0 16.8 13"
            role="img"
            aria-label={title}
        >
            <title>{title}</title>
            <polygon
                points="12.136 3.139 13.25 4.253 6.211 11.292 2.75 7.83 3.863 6.717 6.211 9.064 12.136 3.139"
                fill="currentColor"
            />
        </svg>
    );
}

export function downTriangle(className?: string, title: string = "▾", deg?: number) {
    let transform;
    if (deg) {
        transform = { transform: `rotate(${deg}deg` };
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 8"
            className={classNames("icon", "icon-triangleRight", className)}
            aria-hidden="true"
            style={transform}
        >
            <title>{title}</title>
            <polygon points="0 2.594 8 2.594 4 6.594 0 2.594" fill="currentColor" />
        </svg>
    );
}

export function rightTriangle(className?: string, title: string = `▶`) {
    return downTriangle(className, title, -90);
}

export function help(className?: string) {
    const title = t("Help");
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className={classNames("icon", "icon-help", className)}
            role="img"
            aria-label={title}
        >
            <title>{title}</title>
            <path
                d="M12,19a7,7,0,1,0-7-7A7,7,0,0,0,12,19Zm0,1a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm-.866-6.5v-.338a2,2,0,0,1,.211-.969,2.757,2.757,0,0,1,.741-.8,4.09,4.09,0,0,0,.812-.773,1.156,1.156,0,0,0,.183-.656.826.826,0,0,0-.3-.683,1.333,1.333,0,0,0-.851-.238A2.941,2.941,0,0,0,11,9.185a6.65,6.65,0,0,0-.836.344L9.721,8.6a4.653,4.653,0,0,1,2.3-.6,2.485,2.485,0,0,1,1.645.508,1.727,1.727,0,0,1,.609,1.4,1.983,1.983,0,0,1-.117.706,2.006,2.006,0,0,1-.352.59,5.653,5.653,0,0,1-.812.731,3.088,3.088,0,0,0-.659.64,1.229,1.229,0,0,0-.166.682V13.5Zm-.217,1.688a.7.7,0,0,1,.778-.8.775.775,0,0,1,.582.209.818.818,0,0,1,.2.59.838.838,0,0,1-.2.595.878.878,0,0,1-1.156.006A.844.844,0,0,1,10.917,15.185Z"
                transform="translate(-4 -4)"
                fill="currentColor"
            />
        </svg>
    );
}

export function compose(className?: string) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={classNames("icon", "icon-compose", className)}
            aria-hidden="true"
        >
            <path
                fill="currentColor"
                d="M23.591,1.27l-.9-.9a1.289,1.289,0,0,0-1.807,0l-.762.863,2.6,2.587.868-.751a1.24,1.24,0,0,0,.248-.373,1.255,1.255,0,0,0,0-1.052A1.232,1.232,0,0,0,23.591,1.27ZM19.5,20.5H3.5V4.5H15.4l1.4-1.431H2.751A1,1,0,0,0,2,4.07V20.939a1,1,0,0,0,1,1H20.011a1,1,0,0,0,1-1V7L19.5,8.445ZM21.364,3.449l-9.875,9.8-.867-.861,9.874-9.8-.867-.863-4.938,4.9-4.938,4.9L8.74,15.167l3.617-1.055,9.875-9.8Z"
            />
        </svg>
    );
}

export function plusCircle(className?: string) {
    const title = `+`;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            className={classNames("icon", "icon-plusCircle", className)}
            role="img"
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                fill="currentColor"
                d="M14,7A7,7,0,1,1,7,0,7,7,0,0,1,14,7Zm-3.727.79a.339.339,0,0,0,.34-.338h0v-.9a.339.339,0,0,0-.339-.339H7.79V3.727a.339.339,0,0,0-.338-.34h-.9a.339.339,0,0,0-.339.339h0V6.21H3.727a.339.339,0,0,0-.34.338h0v.9a.339.339,0,0,0,.339.339H6.21v2.483a.339.339,0,0,0,.338.34h.9a.339.339,0,0,0,.339-.339h0V7.79Z"
            />
        </svg>
    );
}

export function signIn(className?: string) {
    const title = t("Sign In");
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4 0 24 18"
            className={classNames("icon", "icon-signIn", className)}
            role="img"
        >
            <title>{title}</title>
            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                <path strokeLinejoin="round" d="M7.243 12.417L10.92 8.74 7.243 5.063" />
                <path d="M10.617 8.74H.843" />
                <path
                    strokeLinejoin="round"
                    d="M2 5.07V1.235C2.051.411 2.451 0 3.2 0h11.507C15.57.033 16 .593 16 1.681v15.136c-.058.789-.346 1.183-.865 1.183H3.2c-.8-.01-1.2-.404-1.2-1.183v-4.12"
                />
            </g>
        </svg>
    );
}

export function chevronUp(className?: string) {
    const title = t("Close");
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 51 17"
            className={classNames("icon", "icon-chevronUp", className)}
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                fill="currentColor"
                d="M4.9,16.752A3.552,3.552,0,0,1,.329,14.668c-.039-.106-.074-.214-.1-.323A4.185,4.185,0,0,1,2.39,9.152L24.246.252a3.31,3.31,0,0,1,2.508,0l21.856,8.9a4.184,4.184,0,0,1,2.166,5.193,3.552,3.552,0,0,1-4.351,2.511,3.41,3.41,0,0,1-.325-.1L25.5,8.358Z"
            />
        </svg>
    );
}

export function searchError(message?: string, className?: string) {
    const title = message ? message : t("Page Not Found");
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={classNames("icon", "icon-notFound", className)}
            aria-hidden="true"
        >
            <title>{title}</title>
            <path
                d="M16.178,14.358l4.628,4.616c.633.631,1.2,1.417.354,2.261s-1.647.286-2.285-.336q-.627-.612-4.7-4.688a7.7,7.7,0,1,1,2.005-1.853ZM9.984,9.214,11.563,7.64a.418.418,0,0,1,.591.59L10.576,9.8l1.578,1.574a.418.418,0,0,1-.591.59L9.984,10.394,8.4,11.968a.418.418,0,0,1-.591-.59L9.392,9.8,7.814,8.23A.418.418,0,0,1,8.4,7.64Zm.063,7.545a7.044,7.044,0,1,0-7.03-7.043A7.037,7.037,0,0,0,10.047,16.759Z"
                fill="currentColor"
            />
        </svg>
    );
}
