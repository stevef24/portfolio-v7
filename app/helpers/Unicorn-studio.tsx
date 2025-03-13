/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";

export type UnicornSceneProps = {
	projectId: string;
	width?: number | string;
	height?: number | string;
	scale?: number;
	dpi?: number;
	fps?: number;
	altText?: string;
	ariaLabel?: string;
	className?: string;
	lazyLoad?: boolean;
};

export default function UnicornScene({
	projectId,
	width = "100%",
	height = "100%",
	scale = 1,
	dpi = 1.5,
	fps = 60,
	altText = "Unicorn Studio Animation",
	ariaLabel = altText,
	className = "",
	lazyLoad = false,
}: UnicornSceneProps) {
	const elementRef = useRef<HTMLDivElement>(null);
	const sceneRef = useRef<any>(null);
	const [error, setError] = useState<string | null>(null);
	const [scriptLoaded, setScriptLoaded] = useState(false);
	// Add a mount state to track when component mounts/unmounts
	const mountedRef = useRef(false);

	// Helper function to initialize the scene
	const initializeScene = () => {
		if (!elementRef.current) return;

		const cleanProjectId = projectId.split("?")[0];

		elementRef.current.setAttribute("data-us-project", cleanProjectId);

		const UnicornStudio = (window as any).UnicornStudio;

		if (!UnicornStudio) {
			throw new Error("UnicornStudio not found");
		}

		if (sceneRef.current) {
			sceneRef.current.destroy();
			sceneRef.current = null;
		}

		UnicornStudio.init({
			scale,
			dpi,
		}).then((scenes: any[]) => {
			const ourScene = scenes.find(
				(scene) =>
					scene.element === elementRef.current ||
					scene.element.contains(elementRef.current)
			);
			if (ourScene) {
				sceneRef.current = ourScene;
			}
		});
	};

	useEffect(() => {
		if (typeof window === "undefined") return;

		// Set mounted flag to true
		mountedRef.current = true;

		const loadScript = () => {
			return new Promise<void>((resolve, reject) => {
				const version = "1.4.0";
				const existingScript = document.querySelector(
					'script[src^="https://cdn.unicorn.studio"]'
				) as HTMLScriptElement;

				if (existingScript) {
					if (scriptLoaded) {
						resolve();
					} else {
						existingScript.addEventListener("load", () => {
							setScriptLoaded(true);
							resolve();
						});
						existingScript.addEventListener("error", () => {
							reject(new Error("Failed to load UnicornStudio script"));
						});
					}
					return;
				}

				const script = document.createElement("script");
				script.src = `https://cdn.unicorn.studio/v${version}/unicornStudio.umd.js`;
				script.async = true;

				script.onload = () => {
					setScriptLoaded(true);
					resolve();
				};
				script.onerror = () => {
					setError("Failed to load UnicornStudio script");
					reject(new Error("Failed to load UnicornStudio script"));
				};

				document.body.appendChild(script);
			});
		};

		const setupScene = async () => {
			try {
				await loadScript();
				// Only initialize if component is still mounted
				if (mountedRef.current) {
					initializeScene();
				}
			} catch (error) {
				if (mountedRef.current) {
					setError(error instanceof Error ? error.message : "Unknown error");
				}
			}
		};

		setupScene();

		// Cleanup function
		return () => {
			// Mark component as unmounted
			mountedRef.current = false;

			// Clean up the scene if it exists
			if (sceneRef.current) {
				sceneRef.current.destroy();
				sceneRef.current = null;
			}
		};
	}, [scriptLoaded, projectId, scale, dpi]);

	// Effect to handle projectId changes
	useEffect(() => {
		if (scriptLoaded && mountedRef.current) {
			initializeScene();
		}
	}, [projectId, scriptLoaded]);

	return (
		<div
			ref={elementRef}
			style={{
				width: typeof width === "number" ? `${width}px` : width,
				height: typeof height === "number" ? `${height}px` : height,
			}}
			className={`relative ${className}`}
			role="img"
			aria-label={ariaLabel}
			data-us-dpi={dpi}
			data-us-scale={scale}
			data-us-fps={fps}
			data-us-alttext={altText}
			data-us-arialabel={ariaLabel}
			data-us-lazyload={lazyLoad ? "true" : ""}
			data-us-production
		>
			{error && <div className="text-red-500">{error}</div>}
		</div>
	);
}
