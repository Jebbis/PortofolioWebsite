import { useEffect, useRef } from "react";
import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Bird() {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    //Update the position of the bird in a sine wave that simulates more bird like movement
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    //If bird flyes off the camera, rotate the bird and make it fly to otherway
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
    }

    //Make the bird move based on its direction
    if (birdRef.current.rotation.y === 0) {
      //Forwards
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      //Backwards
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;
