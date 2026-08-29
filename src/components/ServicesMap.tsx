interface ServiceMapProps {
    highlightFrontend?: boolean|null;
    highlightBackend?: boolean|null;
    highlightDB?: boolean|null;
    highlightAIService?: boolean|null;
    highlightAITraining?: boolean|null;
    highlightDataset?: boolean|null;
    highlightRawData?: boolean|null;
    highlightCloud?: boolean|null;
}

const BG_COLOR = "#f9f9f9"
const BG_WH_COLOR = "#ffffff"

const BGH_FRONTEND_COLOR = "#80d5ffff"
const BGH_BACKEND_COLOR = "#7cd6f9ff"
const BGH_DATABASE_COLOR = "#7c92f9ff"
const BGH_AISERVICE_COLOR = "#bdb5ffff"
const BGH_AITRAINING_COLOR = "#f9a7f4ff"
const BGH_DATASET_COLOR = "#f9c3d8ff"
const BGH_RAWDATA_COLOR = "#f9c0c0ff"
const BGH_CLOUD_COLOR = "#e0ffffff"
const STROKE_COLOR = "#b7b7b7"
const STROKE_LIGHT_COLOR = "#ededed"
const INACTIVE_STROKE_DASH = "3.96876 1.32292"

function strokeDasharray(highlight: boolean | null) {
    return highlight === false ? INACTIVE_STROKE_DASH : "none"
}

export default function ServicesMap({
    highlightFrontend = null,
    highlightBackend = null,
    highlightDB = null,
    highlightAIService = null,
    highlightAITraining = null,
    highlightDataset = null,
    highlightRawData = null,
    highlightCloud = null,
}: ServiceMapProps) {
    
    return (
        <svg
        viewBox="0 0 466.99 136.79"
    >
        <defs>
        <linearGradient id="services-clean_svg__g">
            <stop
            offset={0}
            style={{
                stopColor: BG_COLOR,
                stopOpacity: 1,
            }}
            />
            <stop
            offset={1}
            style={{
                stopColor: highlightRawData ? BGH_RAWDATA_COLOR : BG_COLOR,
                stopOpacity: 1,
            }}
            />
        </linearGradient>
        <linearGradient id="services-clean_svg__f">
            <stop
            offset={0}
            style={{
                stopColor: BG_COLOR,
                stopOpacity: 1,
            }}
            />
            <stop
            offset={1}
            style={{
                stopColor: highlightDataset ? BGH_DATASET_COLOR : BG_COLOR,
                stopOpacity: 1,
            }}
            />
        </linearGradient>
        <linearGradient id="services-clean_svg__e">
            <stop
            offset={0}
            style={{
                stopColor: BG_COLOR,
                stopOpacity: 1,
            }}
            />
            <stop
            offset={1}
            style={{
                stopColor: highlightAITraining ? BGH_AITRAINING_COLOR : BG_COLOR,
                stopOpacity: 1,
            }}
            />
        </linearGradient>
        <linearGradient id="services-clean_svg__d">
            <stop
            offset={0}
            style={{
                stopColor: BG_COLOR,
                stopOpacity: 1,
            }}
            />
            <stop
            offset={1}
            style={{
                stopColor: highlightAIService ? BGH_AISERVICE_COLOR : BG_COLOR,
                stopOpacity: 1,
            }}
            />
        </linearGradient>
        <linearGradient id="services-clean_svg__c">
            <stop
            offset={0}
            style={{
                stopColor: BG_COLOR,
                stopOpacity: 1,
            }}
            />
            <stop
            offset={1}
            style={{
                stopColor: highlightDB ? BGH_DATABASE_COLOR : BG_COLOR,
                stopOpacity: 1,
            }}
            />
        </linearGradient>
        <linearGradient id="services-clean_svg__b">
            <stop
            offset={0}
            style={{
                stopColor: BG_COLOR,
                stopOpacity: 1,
            }}
            />
            <stop
            offset={1}
            style={{
                stopColor: highlightBackend ? BGH_BACKEND_COLOR : BG_COLOR,
                stopOpacity: 1,
            }}
            />
        </linearGradient>
        <linearGradient id="services-clean_svg__a">
            <stop
            offset={0}
            style={{
                stopColor: BG_COLOR,
                stopOpacity: 1,
            }}
            />
            <stop
            offset={1}
            style={{
                stopColor: highlightFrontend ? BGH_FRONTEND_COLOR : BG_COLOR,
                stopOpacity: 1,
            }}
            />
        </linearGradient>
        <linearGradient
            xlinkHref="#services-clean_svg__a"
            id="services-clean_svg__p"
            x1={16.933}
            x2={84.667}
            y1={16.933}
            y2={84.667}
            gradientUnits="userSpaceOnUse"
        />
        <linearGradient
            xlinkHref="#services-clean_svg__b"
            id="services-clean_svg__v"
            x1={135.467}
            x2={203.2}
            y1={16.933}
            y2={84.667}
            gradientUnits="userSpaceOnUse"
        />
        <linearGradient
            xlinkHref="#services-clean_svg__c"
            id="services-clean_svg__t"
            x1={188.383}
            x2={220.133}
            y1={65.617}
            y2={101.6}
            gradientUnits="userSpaceOnUse"
        />
        <linearGradient
            xlinkHref="#services-clean_svg__d"
            id="services-clean_svg__x"
            x1={254}
            x2={270.933}
            y1={16.933}
            y2={84.667}
            gradientUnits="userSpaceOnUse"
        />
        <linearGradient
            xlinkHref="#services-clean_svg__e"
            id="services-clean_svg__r"
            x1={304.8}
            x2={321.733}
            y1={16.933}
            y2={84.667}
            gradientUnits="userSpaceOnUse"
        />
        <linearGradient
            xlinkHref="#services-clean_svg__f"
            id="services-clean_svg__i"
            x1={389.467}
            x2={397.933}
            y1={8.467}
            y2={33.867}
            gradientUnits="userSpaceOnUse"
        />
        <linearGradient
            xlinkHref="#services-clean_svg__g"
            id="services-clean_svg__k"
            x1={389.467}
            x2={397.933}
            y1={63.5}
            y2={91.017}
            gradientUnits="userSpaceOnUse"
        />
        <linearGradient
            xlinkHref="#services-clean_svg__g"
            id="services-clean_svg__l"
            x1={389.467}
            x2={397.933}
            y1={63.5}
            y2={91.017}
            gradientUnits="userSpaceOnUse"
        />
        <path id="services-clean_svg__o" d="M448-88h384v64H448z" />
        <path id="services-clean_svg__u" d="M656 256h176v64H656z" />
        <path id="services-clean_svg__m" d="M1408 256h256v64h-256z" />
        <path id="services-clean_svg__j" d="M1408 64h256v64h-256z" />
        <path id="services-clean_svg__s" d="M1104 64h176v128h-176z" />
        <path id="services-clean_svg__y" d="M896 64h176v128H896z" />
        <path id="services-clean_svg__w" d="M512 64h256v64H512z" />
        <path id="services-clean_svg__q" d="M64 64h256v64H64z" />
        </defs>
        <g data-label="Capa 1" transform="translate(9.128 26.061)">
        <g data-label="Dots_Front_Back">
            <path
            d="M99.483 50.8"
            data-label="A1"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: 0.105833,
                strokeLinecap: "butt",
                strokeLinejoin: "round",
                strokeDasharray: "none",
                strokeOpacity: 1,
                paintOrder: "fill markers stroke",
            }}
            />
            <path
            d="M120.65 50.8"
            data-label="A2"
            style={{
                fill: "none",
                stroke: "#000",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
        </g>
        <g data-label="Dots_Back_AIService">
            <path
            d="M218.017 25.4"
            data-label="A1"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
            <path
            d="M228.6 25.4"
            data-label="A2"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
            <path
            d="M228.6 50.8"
            data-label="A3"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
            <path
            d="M239.183 50.8"
            data-label="A4"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
        </g>
        <g data-label="Dots_Back_DB">
            <path
            d="M196.85 57.15"
            data-label="A2"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
            <path
            d="M196.85 44.45"
            data-label="A1"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
        </g>
        <g data-label="Dots_AIService_AIModel">
            <path
            d="M294.217 50.8"
            data-label="A2"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
            <path
            d="M281.517 50.8"
            data-label="A1"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
        </g>
        <g data-label="Dots_AIModel_Dataset">
            <path
            d="M336.55 50.8"
            data-label="A1"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
            <path
            d="M347.133 50.8"
            data-label="A2"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
            <path
            d="M347.133 25.4"
            data-label="A3"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
            <path
            d="M357.717 25.4"
            data-label="A4"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
        </g>
        <g data-label="Dots_Dataset_RawData">
            <path
            d="M406.4 57.15"
            data-label="A2"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
            <path
            d="M406.4 44.45"
            data-label="A1"
            style={{
                fill: "none",
                stroke: "none",
                strokeWidth: ".264583px",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeOpacity: 1,
            }}
            />
        </g>
        <g data-label="DATASET">
            <path
            d="M355.6 4.233c0-2.116 2.117-4.233 4.233-4.233h93.134c2.116 0 4.233 2.117 4.233 4.233v38.1c0 2.117-2.117 4.234-4.233 4.234h-93.134c-2.116 0-4.233-2.117-4.233-4.234z"
            data-label="P_DatasetCuration"
            style={{
                fill: "url(#services-clean_svg__i)",
                fillOpacity: 1,
                stroke: "#b7b7b7",
                strokeWidth: 1.32292,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: strokeDasharray(highlightDataset),
                strokeDashoffset: 0,
                strokeOpacity: 1,
            }}
            />
            <g
            stroke="#292d32"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={13.229}
            data-label="DatasetIcon"
            >
            <path
                d="M233.892-160.514h-26.459c-9.701 0-17.639-7.937-17.639-17.639v-17.639c0-9.701 7.938-17.639 17.64-17.639h26.458c9.701 0 17.639 7.938 17.639 17.64v17.638c0 9.702-7.938 17.64-17.64 17.64M355.6-169.333h-31.75c-5.82 0-10.583-4.763-10.583-10.584v-14.11c0-5.822 4.762-10.584 10.583-10.584h31.75c5.82 0 10.583 4.762 10.583 10.583v14.111c0 5.821-4.762 10.584-10.583 10.584M355.6-103.187h-31.75c-5.82 0-10.583-4.763-10.583-10.584v-14.11c0-5.822 4.762-10.584 10.583-10.584h31.75c5.82 0 10.583 4.762 10.583 10.583v14.111c0 5.821-4.762 10.584-10.583 10.584"
                style={{
                fill: "none",
                stroke: "#747474",
                strokeOpacity: 1,
                }}
                transform="matrix(.05873 0 0 .05873 367.78 30.638)"
            />
            <path
                strokeMiterlimit={10}
                d="M251.53-186.972h61.737M282.399-186.972V-72.32c0 9.7 7.937 17.638 17.638 17.638h13.23M282.399-120.826h30.868"
                style={{
                fill: "none",
                stroke: "#747474",
                strokeOpacity: 1,
                }}
                transform="matrix(.05873 0 0 .05873 367.78 30.638)"
            />
            <path
                d="M355.6-37.042h-31.75c-5.82 0-10.583-4.762-10.583-10.583v-14.111c0-5.82 4.762-10.583 10.583-10.583h31.75c5.82 0 10.583 4.762 10.583 10.583v14.111c0 5.82-4.762 10.583-10.583 10.583"
                style={{
                fill: "none",
                stroke: "#747474",
                strokeOpacity: 1,
                }}
                transform="matrix(.05873 0 0 .05873 367.78 30.638)"
            />
            </g>
            <text
            x={121.488}
            data-label="T_DatasetCuration"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 700,
                fontStretch: "normal",
                fontSize: "34.6667px",
                lineHeight: 1,
                fontFamily: "Geist",
                textAlign: "center",
                whiteSpace: "pre",
                display: "inline",
                fill: "#747474",
                fillOpacity: 1,
                stroke: "none",
            }}
            transform="matrix(.26458 0 0 .26458 10.095 2.201)"
            >
            <tspan x={1468.847} y={90.8}>
                {"Dataset "}
            </tspan>
            </text>
        </g>
        <g
            data-label="RAW_DATA"
            style={{
            fill: "url(#services-clean_svg__k)",
            fillOpacity: 1,
            }}
        >
            <path
            d="M355.6 59.267c0-2.117 2.117-4.234 4.233-4.234h93.134c2.116 0 4.233 2.117 4.233 4.234v38.1c0 2.116-2.117 4.233-4.233 4.233h-93.134c-2.116 0-4.233-2.117-4.233-4.233z"
            data-label="P_RawData"
            style={{
                fill: "url(#services-clean_svg__l)",
                fillOpacity: 1,
                stroke: "#b7b7b7",
                strokeWidth: 1.32292,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: strokeDasharray(highlightRawData),
                strokeDashoffset: 0,
                strokeOpacity: 1,
            }}
            />
            <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 5 5.08 5 6.2 5h3.475c.489 0 .733 0 .964.055q.308.075.578.24c.201.123.374.296.72.642l.126.126c.346.346.519.519.72.642q.272.165.579.24c.23.055.474.055.963.055H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 8.52 21 9.08 21 10.2v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 19 18.92 19 17.8 19H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8Z"
            data-label="FolderIcon"
            style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#747474",
                strokeOpacity: 1,
            }}
            transform="matrix(.51664 0 0 .51664 377.424 72.117)"
            />
            <text
            x={66.384}
            data-label="T_RawData"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 700,
                fontStretch: "normal",
                fontSize: "34.6667px",
                lineHeight: 1,
                fontFamily: "Geist",
                textAlign: "center",
                whiteSpace: "pre",
                display: "inline",
                fill: "#747474",
                fillOpacity: 1,
                stroke: "none",
            }}
            transform="matrix(.26458 0 0 .26458 7.273 6.283)"
            >
            <tspan x={1457.421} y={282.8}>
                {"Raw data"}
            </tspan>
            </text>
        </g>
        <g
            data-label="CLOUD"
            style={{
            fill: "#f9eaea",
            fillOpacity: 1,
            }}
        >
            <rect
            width={355.6}
            height={118.533}
            x={-8.467}
            y={-8.467}
            data-label="CloudBody"
            ry={8.467}
            stroke={STROKE_LIGHT_COLOR}
            strokeWidth={1.32292}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeDasharray={strokeDasharray(highlightCloud)}
            strokeDashoffset={0}
            style={{
                fill: highlightCloud ? BGH_CLOUD_COLOR : BG_WH_COLOR,
                fillOpacity: 1,
                strokeOpacity: 1,
                paintOrder: "fill markers stroke",
            }}
            />
            <path
            d="M101.6-8.467H254"
            data-label="LineOccluder"
            style={{
                fill: "none",
                fillOpacity: 1,
                stroke: highlightCloud ? BGH_CLOUD_COLOR : BG_WH_COLOR,
                strokeWidth: 2.8,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: "none",
                strokeOpacity: 1,
            }}
            transform="translate(-8.467)"
            />
            <path
            d="M101.6-8.467c4.233 0 6.35-2.116 8.467-8.466 2.116-6.35 4.233-8.467 8.466-8.467h118.534c4.233 0 6.35 2.117 8.466 8.467 2.117 6.35 4.234 8.466 8.467 8.466"
            data-label="Top"
            stroke={STROKE_LIGHT_COLOR}
            strokeWidth={1.32292}
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeDasharray={strokeDasharray(highlightCloud)}
            strokeDashoffset={0}
            style={{
                fill: highlightCloud ? BGH_CLOUD_COLOR : BG_WH_COLOR,
                fillOpacity: 1,
                strokeOpacity: 1,
            }}
            transform="translate(-8.467)"
            />
            <g
            data-label="G_Icon_and_cloud_txt"
            style={{
                fill: "url(#services-clean_svg__n)",
                fillOpacity: 1,
            }}
            transform="translate(5.715 1.137)"
            >
            <text
                textAnchor="middle"
                style={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: 32,
                lineHeight: 1.25,
                fontFamily: "sans-serif",
                whiteSpace: "pre",
                fill: "#747474",
                fillOpacity: 1,
                stroke: "none",
                }}
                transform="matrix(.26458 0 0 .26458 0 .515)"
            >
                <tspan
                x={618.42}
                y={-58.884}
                style={{
                    fontWeight: 700,
                    fontFamily: "Geist",
                }}
                >
                {"Cloud Infrastructure"}
                </tspan>
            </text>
            <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 19a5 5 0 0 0 .65-9.94A6 6 0 0 0 6 11a4 4 0 1 0 0 8Z"
                data-label="CloudIcon"
                style={{
                fill: "#fff",
                fillOpacity: 1,
                stroke: "#cacaca",
                strokeWidth: 2.48367,
                strokeDasharray: "none",
                strokeOpacity: 1,
                }}
                transform="translate(107.565 -23.198)scale(.42598)"
            />
            </g>
        </g>
        <g data-label="FRONTEND">
            <path
            d="M0 4.233C0 2.117 2.117 0 4.233 0h93.134c2.116 0 4.233 2.117 4.233 4.233v93.134c0 2.116-2.117 4.233-4.233 4.233H4.233C2.117 101.6 0 99.483 0 97.367z"
            data-label="UI_Design"
            style={{
                fill: "url(#services-clean_svg__p)",
                fillOpacity: 1,
                stroke: "#b7b7b7",
                strokeWidth: 1.32292,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: strokeDasharray(highlightFrontend),
                strokeDashoffset: 0,
                strokeOpacity: 1,
            }}
            />
            <text
            textAnchor="middle"
            data-label="T_UI_Design"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 700,
                fontStretch: "normal",
                fontSize: "34.6667px",
                lineHeight: 1,
                fontFamily: "Geist",
                whiteSpace: "pre",
                display: "inline",
                fill: "#747474",
                fillOpacity: 1,
                stroke: "none",
            }}
            transform="matrix(.26458 0 0 .26458 0 2.793)"
            >
            <tspan x={192} y={91.507}>
                {"UI and Design"}
            </tspan>
            </text>
            <g
            data-label="FrontendIcon"
            style={{
                fill: "#747474",
                fillOpacity: 1,
            }}
            >
            <g
                style={{
                fill: "#747474",
                fillOpacity: 1,
                }}
            >
                <path
                d="M245.382 208.618h-10.78v-32.163c0-6.09-4.996-11.076-11.081-11.076h-79.959c-6.09 0-11.076 4.985-11.076 11.076v46.752c0 6.1 4.986 11.076 11.076 11.076h10.22v32.2c0 5.022 4.103 9.11 9.11 9.11h20.263c5.011 0 9.115-4.093 9.115-9.11v-32.206h7.325v16.113c0 4.4 3.6 8.005 8.015 8.005h37.772c4.41 0 8.005-3.595 8.005-8.005v-33.772c0-4.404-3.61-8-8.005-8m-2.35 4.395a2.476 2.476 0 0 1 2.485 2.474 2.48 2.48 0 0 1-2.485 2.475 2.474 2.474 0 1 1 0-4.949m4.295 38.513h-41.663v-29.819h41.663zm-11.392-38.508a2.47 2.47 0 0 1 2.48 2.47 2.47 2.47 0 0 1-2.48 2.469 2.47 2.47 0 0 1-2.47-2.47 2.48 2.48 0 0 1 2.47-2.47m-14.904-41.99a3.236 3.236 0 0 1 3.242 3.237 3.236 3.236 0 0 1-3.242 3.237 3.237 3.237 0 0 1 0-6.474m-9.27.005a3.224 3.224 0 0 1 3.22 3.232 3.224 3.224 0 0 1-3.22 3.232 3.226 3.226 0 0 1-3.233-3.232 3.236 3.236 0 0 1 3.232-3.232m-38.867 46a2.473 2.473 0 0 1 4.944 0 2.477 2.477 0 0 1-2.475 2.474 2.473 2.473 0 0 1-2.47-2.474m7.08 0c0-1.37 1.111-2.475 2.48-2.475a2.474 2.474 0 1 1 0 4.949c-1.369 0-2.48-1.11-2.48-2.474m5.401 50.736h-24.683v-43.67h24.688zm6.895-42.996v-5.909c0-5-4.104-9.104-9.11-9.104h-20.268c-5.007 0-9.11 4.103-9.11 9.104v5.909h-12.907V182.97h85.323v25.648h-18.593c-4.415 0-8.015 3.595-8.015 8v8.155z"
                style={{
                    fill: "#747474",
                    fillOpacity: 1,
                    strokeWidth: 0.240499,
                }}
                transform="translate(14.725 21.994)scale(.18698)"
                />
            </g>
            </g>
        </g>
        <g data-label="AI_MODEL">
            <path
            d="M292.1 4.233c0-2.116 2.117-4.233 4.233-4.233h38.1c2.117 0 4.234 2.117 4.234 4.233v93.134c0 2.116-2.117 4.233-4.234 4.233h-38.1c-2.116 0-4.233-2.117-4.233-4.233Z"
            data-label="P_AIModel"
            style={{
                fill: "url(#services-clean_svg__r)",
                fillOpacity: 1,
                stroke: "#b7b7b7",
                strokeWidth: 1.32292,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: strokeDasharray(highlightAITraining),
                strokeDashoffset: 0,
                strokeOpacity: 1,
            }}
            />
            <text
            data-label="T_AIModel"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 700,
                fontStretch: "normal",
                fontSize: "34.6667px",
                lineHeight: 1,
                fontFamily: "Geist",
                textAlign: "center",
                whiteSpace: "pre",
                display: "inline",
                fill: "#747474",
                fillOpacity: 1,
                stroke: "none",
            }}
            transform="scale(.26458)"
            >
            <tspan x={1174.597} y={90.8}>
                {"AI\n"}
            </tspan>
            <tspan x={1139.133} y={125.467}>
                {"Model"}
            </tspan>
            </text>
            <g
            style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#747474",
                strokeWidth: 3,
                strokeOpacity: 1,
            }}
            transform="matrix(.31884 0 0 .31884 304.417 56.114)"
            >
            <circle
                cx={34.52}
                cy={11.43}
                r={5.82}
                style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#747474",
                strokeOpacity: 1,
                }}
            />
            <circle
                cx={53.63}
                cy={31.6}
                r={5.82}
                style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#747474",
                strokeOpacity: 1,
                }}
            />
            <circle
                cx={34.52}
                cy={50.57}
                r={5.82}
                style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#747474",
                strokeOpacity: 1,
                }}
            />
            <circle
                cx={15.16}
                cy={42.03}
                r={5.82}
                style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#747474",
                strokeOpacity: 1,
                }}
            />
            <circle
                cx={15.16}
                cy={19.27}
                r={5.82}
                style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#747474",
                strokeOpacity: 1,
                }}
            />
            <circle
                cx={34.51}
                cy={29.27}
                r={4.7}
                style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#747474",
                strokeOpacity: 1,
                }}
            />
            <path
                d="m20.17 16.3 8.73-3.37M38.6 15.59l10.88 11.93M50.07 36.2l-11.4 10.29M18.36 24.13l12.55 21.88M20.31 44.74l8.39 3.89M17.34 36.63l14.03-20.31M20.52 21.55l9.82 5.55M39.22 29.8l8.59.65M34.51 33.98l.01 10.76"
                style={{
                fill: "none",
                fillOpacity: 1,
                stroke: "#747474",
                strokeOpacity: 1,
                }}
            />
            </g>
        </g>
        <g data-label="DATABASE">
            <path
            d="M173.567 59.267c0-2.117 2.116-4.234 4.233-4.234h38.1c2.117 0 4.233 2.117 4.233 4.234v38.1c0 2.116-2.116 4.233-4.233 4.233h-38.1c-2.117 0-4.233-2.117-4.233-4.233z"
            data-label="Database"
            style={{
                fill: "url(#services-clean_svg__t)",
                fillOpacity: 1,
                stroke: "#b7b7b7",
                strokeWidth: 1.32292,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: strokeDasharray(highlightDB),
                strokeDashoffset: 0,
                strokeOpacity: 1,
            }}
            />
            <text
            data-label="T_Database"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 700,
                fontStretch: "normal",
                fontSize: "34.6667px",
                lineHeight: 1,
                fontFamily: "Geist",
                textAlign: "center",
                whiteSpace: "pre",
                display: "inline",
                fill: "#747474",
                fillOpacity: 1,
                stroke: "none",
            }}
            transform="matrix(.26458 0 0 .26458 0 -2.858)"
            >
            <tspan x={663.032} y={282.8}>
                {"Database"}
            </tspan>
            </text>
            <path
            fill="#1c274c"
            fillRule="evenodd"
            d="M3.25 6c0-1.542 1.23-2.736 2.758-3.5C7.58 1.716 9.7 1.25 12 1.25s4.42.465 5.992 1.25c1.528.764 2.758 1.958 2.758 3.5v12c0 1.542-1.23 2.736-2.758 3.5-1.572.785-3.692 1.25-5.992 1.25s-4.42-.465-5.992-1.25C4.48 20.734 3.25 19.541 3.25 18Zm1.5 0c0-.667.56-1.474 1.929-2.158C8.002 3.181 9.882 2.75 12 2.75s3.998.43 5.321 1.092C18.69 4.526 19.25 5.332 19.25 6s-.56 1.474-1.929 2.158C15.998 8.819 14.118 9.25 12 9.25s-3.998-.43-5.321-1.092C5.31 7.474 4.75 6.668 4.75 6m0 12c0 .667.56 1.474 1.929 2.158 1.323.661 3.203 1.092 5.321 1.092s3.998-.43 5.321-1.092c1.368-.684 1.929-1.49 1.929-2.158v-3.293c-.377.3-.804.565-1.258.792C16.42 16.285 14.3 16.75 12 16.75s-4.42-.465-5.992-1.25a7 7 0 0 1-1.258-.793Zm14.5-9.293V12c0 .667-.56 1.474-1.929 2.158-1.323.661-3.203 1.092-5.321 1.092s-3.998-.43-5.321-1.092C5.31 13.474 4.75 12.668 4.75 12V8.707c.377.3.804.565 1.258.792C7.58 10.285 9.7 10.75 12 10.75s4.42-.465 5.992-1.25a7 7 0 0 0 1.258-.793"
            clipRule="evenodd"
            data-label="DbIcon"
            style={{
                fill: "#747474",
                fillOpacity: 1,
            }}
            transform="matrix(.72322 0 0 .72322 188.171 77.765)"
            />
        </g>
        <g data-label="BACKEND">
            <path
            d="M122.767 101.6h38.1c2.116 0 4.233-2.117 4.233-4.261V55.033c0-4.233 4.233-8.466 8.467-8.466H215.9c2.117 0 4.233-2.117 4.233-4.234v-38.1c0-2.116-2.116-4.233-4.233-4.233h-93.133c-2.117 0-4.234 2.117-4.234 4.233v93.134c0 2.116 2.117 4.233 4.234 4.233z"
            data-label="P_Backend"
            style={{
                fill: "url(#services-clean_svg__v)",
                fillOpacity: 1,
                stroke: "#b7b7b7",
                strokeWidth: 1.32292,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: strokeDasharray(highlightBackend),
                strokeDashoffset: 0,
                strokeOpacity: 1,
            }}
            />
            <text
            x={122.88}
            data-label="T_Backend"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 700,
                fontStretch: "normal",
                fontSize: "34.6667px",
                lineHeight: 1,
                fontFamily: "Geist",
                textAlign: "center",
                whiteSpace: "pre",
                display: "inline",
                fill: "#747474",
                fillOpacity: 1,
                stroke: "none",
            }}
            transform="matrix(.26458 0 0 .26458 0 2.98)"
            >
            <tspan x={566.014} y={90.8}>
                {"Backend"}
            </tspan>
            </text>
            <g
            fill="#1c274c"
            data-label="BackendIcon"
            style={{
                fill: "#747474",
                fillOpacity: 1,
            }}
            >
            <path
                fillRule="evenodd"
                d="M4.975 2.25h14.05c.445 0 .816 0 1.12.02.318.022.617.07.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907 2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948.12.29.167.59.188.907.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907 2.75 2.75 0 0 1-.652.948c.279.264.503.586.653.948.12.29.167.59.188.907.021.304.021.675.021 1.12v.05c0 .445 0 .816-.02 1.12a2.8 2.8 0 0 1-.19.907 2.75 2.75 0 0 1-1.488 1.489c-.29.12-.59.167-.907.188-.304.021-.675.021-1.12.021H4.975c-.445 0-.816 0-1.12-.02a2.8 2.8 0 0 1-.907-.19 2.75 2.75 0 0 1-1.489-1.488c-.12-.29-.167-.59-.188-.907-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12.022-.317.07-.617.19-.907A2.75 2.75 0 0 1 2.112 15a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12.022-.318.07-.617.19-.907A2.75 2.75 0 0 1 2.112 9a2.75 2.75 0 0 1-.654-.948c-.12-.29-.167-.59-.188-.907-.021-.304-.021-.675-.021-1.12v-.05c0-.445 0-.816.02-1.12.022-.317.07-.617.19-.907a2.75 2.75 0 0 1 1.488-1.489c.29-.12.59-.167.907-.188.304-.021.675-.021 1.12-.021m.025 6c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078a1.25 1.25 0 0 1-.677-.677c-.032-.077-.061-.194-.078-.435A17 17 0 0 1 2.75 6c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677.077-.032.194-.061.435-.078A17 17 0 0 1 5 3.75h14c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 0 1-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017Zm0 1.5c-.476 0-.796 0-1.043.017-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435.127.307.37.55.677.677.077.032.194.061.435.078.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17 17 0 0 0 19 9.75Zm0 6c-.476 0-.796 0-1.043.017-.241.017-.358.046-.435.078a1.25 1.25 0 0 0-.677.677c-.032.077-.061.194-.078.435-.017.247-.017.567-.017 1.043s0 .796.017 1.043c.017.241.046.358.078.435.127.307.37.55.677.677.077.032.194.061.435.078.247.017.567.017 1.043.017h14c.476 0 .796 0 1.043-.017.241-.017.358-.046.435-.078.307-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043s0-.796-.017-1.043c-.017-.241-.046-.358-.078-.435a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17 17 0 0 0 19 15.75Z"
                clipRule="evenodd"
                style={{
                fill: "#747474",
                fillOpacity: 1,
                }}
                transform="matrix(.7876 0 0 .7876 134.482 52.958)"
            />
            <path
                d="M6 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6 18a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                style={{
                fill: "#747474",
                fillOpacity: 1,
                }}
                transform="matrix(.7876 0 0 .7876 134.482 52.958)"
            />
            </g>
        </g>
        <g data-label="AI_SERVICE">
            <path
            d="M237.067 4.233c0-2.116 2.116-4.233 4.233-4.233h38.1c2.117 0 4.233 2.117 4.233 4.233v93.134c0 2.116-2.116 4.233-4.233 4.233h-38.1c-2.117 0-4.233-2.117-4.233-4.233z"
            data-label="P_AIService"
            style={{
                fill: "url(#services-clean_svg__x)",
                fillOpacity: 1,
                stroke: "#b7b7b7",
                strokeWidth: 1.32292,
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeDasharray: strokeDasharray(highlightAIService),
                strokeDashoffset: 0,
                strokeOpacity: 1,
            }}
            />
            <text
            x={117.444}
            data-label="T_AIService"
            style={{
                fontStyle: "normal",
                fontVariant: "normal",
                fontWeight: 700,
                fontStretch: "normal",
                fontSize: "34.6667px",
                lineHeight: 1,
                fontFamily: "Geist",
                textAlign: "center",
                whiteSpace: "pre",
                display: "inline",
                fill: "#747474",
                fillOpacity: 1,
                stroke: "none",
            }}
            transform="scale(.26458)"
            >
            <tspan x={966.597} y={90.8}>
                {"AI\n"}
            </tspan>
            <tspan x={919.021} y={125.467}>
                {"Service"}
            </tspan>
            </text>
            <g data-label="Plug">
            <path
                d="M25.6 25.6 22.2 29 19 25.8l3.4-3.4a2 2 0 0 0-2.8-2.8L16.2 23l-1.3-1.3a1.9 1.9 0 0 0-2.8 0l-3 3a9.8 9.8 0 0 0-3 7 9.1 9.1 0 0 0 1.8 5.6l-3.3 3.3a1.9 1.9 0 0 0 0 2.8 1.9 1.9 0 0 0 2.8 0l3.2-3.2a10.1 10.1 0 0 0 5.9 1.9 10.2 10.2 0 0 0 7.1-2.9l3-3a2 2 0 0 0 .6-1.4 1.7 1.7 0 0 0-.6-1.4L25 31.8l3.4-3.4a2 2 0 0 0-2.8-2.8m-4.8 10.8a6.1 6.1 0 0 1-8.5 0l-.4-.4a6.4 6.4 0 0 1-1.8-4.3 6 6 0 0 1 1.8-4.2l1.6-1.6 8.8 8.9zM43.4 4.6a1.9 1.9 0 0 0-2.8 0L37.2 8a10 10 0 0 0-13 .9l-3 3a2 2 0 0 0-.6 1.4 1.7 1.7 0 0 0 .6 1.4l11.7 11.7a1.9 1.9 0 0 0 2.8 0l3-2.9a9.9 9.9 0 0 0 2.9-7.1 10.4 10.4 0 0 0-1.6-5.5l3.4-3.5a1.9 1.9 0 0 0 0-2.8m-7.5 16-1.6 1.6-8.9-8.9 1.6-1.5a5.9 5.9 0 0 1 8.5 0l.4.3a6.3 6.3 0 0 1 1.7 4.3 5.9 5.9 0 0 1-1.7 4.2"
                style={{
                fill: "#747474",
                fillOpacity: 1,
                stroke: "none",
                strokeOpacity: 1,
                }}
                transform="translate(252.892 59.23)scale(.31075)"
            />
            </g>
        </g>
        </g>
    </svg>
    );
}
