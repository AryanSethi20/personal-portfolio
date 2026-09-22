import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

import { Ball } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const containerRef = useRef(null);

  return (
    <>
      <div
        ref={containerRef}
        className='flex flex-row flex-wrap justify-center gap-10'
      >
        {technologies.map((technology) => (
          <View key={technology.name} className='w-28 h-28'>
            <Ball imgUrl={technology.icon} />
          </View>
        ))}
      </div>

      {/* One shared WebGL context for every ball above. <View> scissors the
          canvas so each tracked div gets its own slice of this single canvas. */}
      <Canvas
        eventSource={containerRef}
        dpr={[1, 2]}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
        }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>
    </>
  );
};

export default SectionWrapper(Tech, "");
