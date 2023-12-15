import { Suspense, useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/island.jsx";
import Sky from "../models/sky.jsx";
import Stars from "../models/stars.jsx";
import Bird from "../models/Bird.jsx";
import Plane from "../models/Plane.jsx";
import HomeInfo from "../components/HomeInfo.jsx";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons/index.js";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { DarkModeContext } from "../providers/themeProvider.jsx";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.35;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {darkMode ? (
            <>
              <directionalLight position={[1, 1, 1]} intensity={0.02} />
              <ambientLight intensity={0.01} />
              <hemisphereLight
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={0.01}
              />
              <pointLight
                position={[0, 1, 0.15]}
                distance={32}
                intensity={200}
                color={"#FFC18D"}
                castShadow
              />
              <Stars isRotating={isRotating} />
            </>
          ) : (
            <>
              <Sky isRotating={isRotating} />
              <directionalLight position={[1, 1, 1]} intensity={2} />
              <ambientLight intensity={0.5} />
              <hemisphereLight
                skyColor="#b1e1ff"
                groundColor="#000000"
                intensity={1}
              />
            </>
          )}

          <Bird />

          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20.1, 0]}
          />
        </Suspense>
      </Canvas>
      <div>
        <div className="absolute bottom-2 left-14">
          {darkMode ? (
            <MdOutlineDarkMode
              size={30}
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer bg-slate-200 rounded-[50%] px-1.5 w-10 h-10"
            />
          ) : (
            <MdOutlineLightMode
              size={30}
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer bg-black-500/20 rounded-[50%] px-1.5 w-10 h-10"
            />
          )}
        </div>
        <div className="absolute bottom-2 left-2">
          <img
            src={!isPlayingMusic ? soundoff : soundon}
            alt="sound"
            className="w-10 h-10 cursor-pointer object-contain"
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
