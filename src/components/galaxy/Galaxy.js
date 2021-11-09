import galaxyStarfieldMap from '../../assets/textures/galaxyStarfield.png';
import { useLoader } from '@react-three/fiber';
import { TextureLoader, DoubleSide, FrontSide, BackSide } from 'three';


export default function Galaxy(props) {
    const { galaxyMap } = useLoader(TextureLoader, [galaxyStarfieldMap]);
    debugger

    return (
        <mesh>
            <sphereGeometry args={[40, 32, 32]} />
            <meshBasicMaterial
                map={galaxyMap}
                side={BackSide}
            />
        </mesh>
    );
}