import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
    ZoomableGroup,
} from "react-simple-maps";

const MapChart = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-10.0, -52.0, 0],
                center: [-5, -3],
                scale: 1100,
            }}
            style={{ width: "100%", height: "100%" }}
        >
            <ZoomableGroup>
                <Geographies
                    geography="/features.json"
                    fill="#1d1d46"
                    stroke="#e5e5e5"
                    strokeWidth={0.5}
                >
                    {({ geographies }) =>
                        geographies.map((geo) => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
                <Annotation
                    subject={[2.3522, 48.8566]}
                    dx={-90}
                    dy={-30}
                    connectorProps={{
                        stroke: "#631636",
                        strokeWidth: 3,
                        strokeLinecap: "round",
                    }}
                >
                    <text
                        x="-8"
                        textAnchor="end"
                        alignmentBaseline="middle"
                        fill="#631636"
                    >
                        {"Montpellier"}
                    </text>
                </Annotation>
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default MapChart;
