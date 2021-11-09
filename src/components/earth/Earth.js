import { OrbitControls, Stars } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { React, useRef, Suspense, useState } from 'react';
import { Color, DoubleSide, TextureLoader } from 'three';
import EarthDayMap from '../../assets/textures/2_no_clouds_4k.jpeg';
import EarthDisplacementMap from '../../assets/textures/displacementMap.jpg';
import EarthCloudsMap from '../../assets/textures/fair_clouds_4k.png';
import EarthNormalMap from '../../assets/textures/normalMap.jpeg';
import EarthSpecularMap from '../../assets/textures/water_4k.png';
import Galaxy from '../galaxy/Galaxy';

export default function Earth(props) {
    const [colorMap, normalMap, specularMap, cloudsMap, displacementMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap, EarthDisplacementMap]);

    const earthRef = useRef();
    const cloudsRef = useRef();

    const [zoom, setZoom] = useState(3);

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();

        earthRef.current.rotation.y = elapsedTime / 40;
        cloudsRef.current.rotation.y = elapsedTime / 33;
    });

    return (
        <>
            <Stars
                radius={100}
                depth={60}
                count={20000}
                factor={7}
                saturation={0}
                fade={true}
            />

            {/* <Suspense fallback={null}>
                <Galaxy />
            </Suspense> */}
            <mesh ref={cloudsRef}>
                <sphereGeometry args={[1.006, 512, 512]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    transparent={true}
                />
            </mesh>
            <mesh ref={earthRef}>
                <OrbitControls
                    minDistance={1.4}
                    maxDistance={20}
                    zoomSpeed={1}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                />
                <sphereBufferGeometry args={[1, 512, 512]} />
                <meshPhongMaterial
                    map={colorMap}
                    bumpMap={displacementMap}
                    specularMap={specularMap}
                    bumpScale={1}
                />
                {/* <meshStandardMaterial
                    normalMap={normalMap}
                    displacementMap={displacementMap}
                    displacementScale={0.02}
                    displacementBias={0.2}
                    metalness={0.4}
                    roughness={0.7}
                /> */}
            </mesh>
        </>
    );
}