import useSpline from '@splinetool/r3f-spline'
import { OrthographicCamera ,} from '@react-three/drei'
import { Canvas,useFrame } from '@react-three/fiber'
import React,{Suspense, useEffect, useRef} from 'react';
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon'
import * as THREE from 'three';
import { PerspectiveCamera ,Html} from '@react-three/drei'
import { SheetProvider, editable as e } from '@theatre/r3f'
import { getProject } from '@theatre/core'
import studio from '@theatre/studio'
import demoProjectState from './th.json'
import extension from '@theatre/r3f/dist/extension'


// studio.initialize()
// studio.extend(extension)

const demoSheet = getProject('Demo Project',{state:demoProjectState }).sheet('Demo Sheet')

export default function Scene() {
  

  

// function MyRotatingBox(props:any) {
//   const myMesh:any = React.useRef();
//   // useEffect(() => {
//   //   demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 1] })
//   // }, [])
//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     myMesh.current.rotation.z =  Math.sin(t/10 +1) 
//     myMesh.current.rotation.x = Math.cos(t/10 ) +20
//     myMesh.current.rotation.y = Math.tan(t/10 +1 )
//     // myMesh.current.position.y = ( Math.sin(t )) / 8
//     // myMesh.current.position.x = ( Math.sin(t )) / 4
//     // myMesh.current.position.z = ( Math.sin(t )) / 4
   
//   });
  

//   return (
//     <mesh ref={myMesh}  {...props}>
//        <boxGeometry args={[.21, .21, .21]} />
//        <meshNormalMaterial   />
//     </mesh>
//   );
// }
useEffect(() => {
    demoSheet.sequence.play({ iterationCount:Infinity, range: [0, 1] })
  }, [ ])
function MyRotatingSphere(props:any) {
  const myMesh:any = React.useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // myMesh.current.rotation.z =  ( Math.sin(t)) / 20
    // myMesh.current.rotation.x = Math.cos(t ) / 2
    // myMesh.current.rotation.y = Math.sin(t ) / 8
    // myMesh.current.position.y = (1+( Math.cos(t ))) 
    // myMesh.current.position.x = ( Math.sin(t )) / 4
    // myMesh.current.position.z = ( Math.sin(t )) / 4
    myMesh.current.scale.x =1
    myMesh.current.scale.y = 1
    myMesh.current.scale.z = 1
  });
  

  return (
    <mesh ref={myMesh}  {...props}>
       <sphereGeometry args={[1, 32]}/>
       <meshNormalMaterial   />
    </mesh>
  );
}

  return (
    <div className='absolute z-[-1] h-full w-full top-0 left-0'>
       <Suspense fallback={<span>loading...</span>}>
       
    <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5] }} >
    <SheetProvider sheet={demoSheet}>
    
    <ambientLight color="cyan" intensity={0.1} />
    <directionalLight color="blue" position={[-10, 20, 25]} />
    
    {/* <MyRotatingBox position={[2, 0, 0]} scale={1}  /> */}
    
    <MyRotatingSphere position={[0, 0, 1]} scale={3.5} />
   </SheetProvider>
      </Canvas>
      </Suspense>
    </div>
  )
}
