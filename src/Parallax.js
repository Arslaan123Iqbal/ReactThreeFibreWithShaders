import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { useLoader } from 'react-three-fiber';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs';

const images = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '0.jpg',
  '1.jpg',
];

function ParallaxImages() {
  const parallaxRef = useRef();
  const [loaded, setLoaded] = useState(false);
  const textures = useLoader(THREE.TextureLoader, images);
  
  useFrame(() => {
    if (parallaxRef.current) {
      parallaxRef.current.update();
    }
  });

  return (
    <div style={{ height: '100vh' }}>
      {loaded && (
        <Parallax ref={parallaxRef} pages={5}>
          <ParallaxLayer offset={0} speed={0} style={{ backgroundColor: '#1c1c1c' }} />
          <ParallaxLayer offset={1} speed={0.5} style={{ backgroundColor: '#888' }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#bbb' }} />
          <ParallaxLayer offset={3} speed={1.5} style={{ backgroundColor: '#ccc' }} />
          <ParallaxLayer offset={4} speed={2} style={{ backgroundColor: '#ddd' }} />

          {textures.map((texture, index) => (
            <ParallaxLayer key={index} offset={index} speed={0.5}>
              <mesh>
                <planeBufferGeometry args={[4, 4]} />
                <meshBasicMaterial map={texture} />
              </mesh>
            </ParallaxLayer>
          ))}
        </Parallax>
      )}
    </div>
  );
}

export default ParallaxImages;
