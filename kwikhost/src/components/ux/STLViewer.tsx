"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const STLViewer = ({ url }: { url: string }) => {
  const mountRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!mountRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x202020); // Dark gray background

    // Create camera
    const camera = new THREE.PerspectiveCamera(75, 800 / 600, 0.1, 1000);
    camera.position.set(0, 0, 10); // Adjust camera position

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(800, 400);

    if (!mountRef.current.contains(renderer.domElement)) {
      mountRef.current.appendChild(renderer.domElement);
    }

    
    var controls = new OrbitControls( camera, renderer.domElement );

    controls.enableDamping = true;
    controls.rotateSpeed = 1;
    controls.dampingFactor = 0.1;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;



    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Load STL file
    const loader = new STLLoader();
    loader.load(
      url,
      (geometry) => {
        console.log("Geometry loaded:", geometry);

        // Create material and mesh
        const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const mesh = new THREE.Mesh(geometry, material);

        // Scale down if needed
        mesh.scale.set(0.05, 0.05, 0.05);

        // Add mesh to the scene
        scene.add(mesh);

        // Add axis helper for debugging
        // const axesHelper = new THREE.AxesHelper(5);
        // scene.add(axesHelper);

        // Animate
        const animate = () => {
          requestAnimationFrame(animate);
          // mesh.rotation.x += 0.01;
          // mesh.rotation.y += 0.01;
          controls.update();
          renderer.render(scene, camera);
        };

        animate();
      },
      (xhr) => {
        console.log(`Loading progress: ${(xhr.loaded / xhr.total) * 100}%`);
      },
      (error) => {
        console.error("Error loading STL file:", error);
      }
    );

    // Cleanup
    return () => {
      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [url]);

  return <div ref={mountRef}></div>;
};

export default STLViewer;
