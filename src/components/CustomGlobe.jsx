import React, { useEffect, useState, useRef} from "react"
import Globe from "react-globe.gl"

const CustomGlobe = () => {
    const globeEl = useRef();
    const [selectedCountry, setSelectedCountry] = useState({
        lat: 24.5,
        lng: 121,
        label: 'Taiwan'
    });

    useEffect(() => {
        const countryLocation = {
            lat: selectedCountry.lat,
            lng: selectedCountry.lng,
            altitude: 1.5
        };
        globeEl.current.pointOfView(countryLocation, 0);
    }, [selectedCountry]);

    return (
        <Globe
            ref={globeEl}
            height={326}
            width={326}
            backgroundColor="rgba(0,0,0,0)"
            backgroundImageOpacity={0.5}
            showAtmosphere
            showGraticules
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            labelDotRadius={1}
            labelSize={3}
            labelsData={[{
                lat: 24.5, lng: 121,
                text: "I'm here in Taiwan !",
                color: 'white'
            }]}/>
    );
}

export default CustomGlobe


