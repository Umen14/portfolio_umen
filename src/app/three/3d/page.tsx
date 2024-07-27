"use client";
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';
import { DDSLoader } from 'three-stdlib';

interface ThreeSceneProps {
    modelPath: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ modelPath }) => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        currentRef?.appendChild(renderer.domElement);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);
        scene.add(ambientLight);

        // Enable DDS textures support
        const manager = new THREE.LoadingManager();
        manager.addHandler(/\.dds$/i, new DDSLoader());

        const loader = new GLTFLoader(manager);
        loader.setPath(modelPath); // Ensure this path is correct and ends with '/'
        loader.load(
            'modals.gltf', // Ensure this is the correct filename
            (gltf) => {
                const model = gltf.scene;

                // Manually load textures
                const textureLoader = new THREE.TextureLoader(manager);
                const textureBaseColor = textureLoader.load(`${modelPath}/Buddy_ChibiReyna_DF.png`);
                const textureEmissive = textureLoader.load(`${modelPath}/Buddy_ChibiReyna_DF.png`);

                // Manually assign textures to materials
                model.traverse((node: any) => {
                    if (node.isMesh) {
                        node.material.map = textureBaseColor;
                        node.material.emissiveMap = textureEmissive;
                        node.material.needsUpdate = true;
                    }
                });

                scene.add(model);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            (error) => {
                console.error('An error happened', error);
            }
        );

        camera.position.z = 5;

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            currentRef?.removeChild(renderer.domElement);
        };
    }, [modelPath]);

    return <div ref={mountRef} />;
};

export default ThreeScene;
