"use client";

import * as React from "react";
import {
	ArrowRight,
	ArrowDown,
	Database,
	Globe,
	Cpu,
	Package,
	Zap,
	Palette,
	Pause,
	Play,
	type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface StepExplanation {
	title: string;
	description: string;
}

interface StepExplanations {
	[key: number]: StepExplanation;
}

interface BoxProps {
	title: string;
	icon: LucideIcon;
	isServer?: boolean;
	step: number;
	currentStep: number;
	onClick: (step: number) => void;
}

const FlowDiagram: React.FC = () => {
	const [currentStep, setCurrentStep] = React.useState<number>(1);
	const [isPlaying, setIsPlaying] = React.useState<boolean>(true);
	const totalSteps = 6;

	const stepExplanations: StepExplanations = {
		1: {
			title: "Component Request",
			description:
				"The client initiates a request for a React Server Component. This is typically triggered by a user action or during the initial page load.",
		},
		2: {
			title: "Server-Side Rendering",
			description:
				"The server receives the request and begins the rendering process. React starts executing the server component code.",
		},
		3: {
			title: "Data Fetching",
			description:
				"During the server-side rendering process, the component can directly access databases, APIs, or other data sources.",
		},
		4: {
			title: "Serialization",
			description:
				"The server serializes the output into a format that can be efficiently transmitted to the client.",
		},
		5: {
			title: "Client Integration",
			description:
				"The client receives the serialized server component output and begins integrating it into the page.",
		},
		6: {
			title: "Interactive DOM",
			description:
				"The server component is fully integrated into the client-side DOM and becomes interactive.",
		},
	};

	React.useEffect(() => {
		let interval: NodeJS.Timeout;
		if (isPlaying) {
			interval = setInterval(() => {
				setCurrentStep((prev) => (prev % totalSteps) + 1);
			}, 2000);
		}
		return () => clearInterval(interval);
	}, [isPlaying]);

	const Box: React.FC<BoxProps> = ({
		title,
		icon: Icon,
		step,
		currentStep,
		onClick,
	}) => {
		const isActive = currentStep === step;
		return (
			<Card
				className={`w-24 h-24 flex flex-col items-center justify-center cursor-pointer transition-all  ${
					isActive ? "border-primary" : "border-muted"
				}`}
				onClick={() => onClick(step)}
			>
				<CardContent className="p-2 text-center">
					<Icon
						className={`mx-auto mb-2 ${
							isActive ? "text-primary" : "text-muted-foreground"
						}`}
					/>
					<p className="text-xs">{title}</p>
				</CardContent>
			</Card>
		);
	};

	const Arrow: React.FC<{
		direction?: "right" | "down";
		isActive: boolean;
	}> = ({ direction = "right", isActive }) => (
		<div className="flex items-center justify-center p-1">
			{direction === "right" ? (
				<ArrowRight
					className={isActive ? "text-primary" : "text-muted-foreground"}
				/>
			) : (
				<ArrowDown
					className={isActive ? "text-primary" : "text-muted-foreground"}
				/>
			)}
		</div>
	);

	const handleStepClick = (step: number) => {
		setCurrentStep(step);
		setIsPlaying(false);
	};

	const isClientInitialActive = currentStep === 1;
	const isServerActive = currentStep >= 2 && currentStep <= 4;
	const isClientFinalActive = currentStep >= 5;

	return (
		<Card className="w-full mx-auto ">
			<CardContent className="p-6 space-y-6">
				<div className="flex justify-center items-center space-x-4">
					<Button
						onClick={() => setIsPlaying(!isPlaying)}
						variant="outline"
						size="sm"
						className="cursor-pointer"
					>
						{isPlaying ? (
							<Pause className="mr-2 h-4 w-4" />
						) : (
							<Play className="mr-2 h-4 w-4" />
						)}
						{isPlaying ? "Pause" : "Play"}
					</Button>
					<p className="text-sm">
						Step: <strong>{currentStep}</strong> of {totalSteps}
					</p>
				</div>

				<div className="space-y-4">
					<Card className={isClientInitialActive ? "border-primary" : ""}>
						<CardHeader>
							<CardTitle className="text-sm">Client - Initial</CardTitle>
						</CardHeader>
						<CardContent className="flex justify-center mb-4">
							<Box
								title="Component Request"
								icon={Globe}
								step={1}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
						</CardContent>
					</Card>

					<Card className={isServerActive ? "border-primary " : ""}>
						<CardHeader>
							<CardTitle className="text-sm">Server Side</CardTitle>
						</CardHeader>
						<CardContent className="flex items-center justify-between mb-4">
							<Box
								title="Server-Side Rendering"
								icon={Cpu}
								isServer
								step={2}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
							<Arrow isActive={isServerActive} />
							<Box
								title="Data Fetching"
								icon={Database}
								isServer
								step={3}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
							<Arrow isActive={isServerActive} />
							<Box
								title="Serialization"
								icon={Package}
								isServer
								step={4}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
						</CardContent>
					</Card>

					<Card className={isClientFinalActive ? "border-primary" : ""}>
						<CardHeader>
							<CardTitle className="text-sm">Client - Final</CardTitle>
						</CardHeader>
						<CardContent className="flex items-center justify-center space-x-4 mb-4">
							<Box
								title="Client Integration"
								icon={Zap}
								step={5}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
							<Arrow isActive={isClientFinalActive} />
							<Box
								title="Interactive DOM"
								icon={Palette}
								step={6}
								currentStep={currentStep}
								onClick={handleStepClick}
							/>
						</CardContent>
					</Card>
				</div>

				<Card>
					<CardHeader>
						<CardTitle className="text-sm">
							Step {currentStep}: {stepExplanations[currentStep].title}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-sm">
							{stepExplanations[currentStep].description}
						</p>
					</CardContent>
				</Card>

				<Separator />

				<p className="text-xs text-muted-foreground">
					Flow: Request → Server Processing → Data → Serialization → Integration
					→ DOM
				</p>
			</CardContent>
		</Card>
	);
};

export default FlowDiagram;
