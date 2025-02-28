import type * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StepProps {
	step: {
		id: number;
		title: string;
		icon: LucideIcon;
		description: string;
	};
	isActive: boolean;
	onClick: () => void;
}

const Step: React.FC<StepProps> = ({ step, isActive, onClick }) => {
	const Icon = step.icon;

	return (
		<Card
			className={cn(
				"mb-4 transition-all duration-300 cursor-pointer",
				isActive ? "border-primary" : "border-muted"
			)}
			onClick={onClick}
		>
			<CardContent className="p-4 flex items-start gap-4">
				<div
					className={cn(
						"p-2 rounded-full flex items-center justify-center",
						isActive
							? "bg-primary text-primary-foreground"
							: "bg-muted text-muted-foreground"
					)}
				>
					<Icon className="w-5 h-5" />
				</div>
				<div className="flex-1">
					<h3
						className={cn(
							"text-sm font-medium mb-1 mt-2",
							isActive ? "text-primary" : "text-foreground"
						)}
					>
						{step.title}
					</h3>
					{isActive && (
						<p className="text-sm text-muted-foreground">{step.description}</p>
					)}
				</div>
				<div
					className={cn(
						"w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
						isActive
							? "bg-primary text-primary-foreground"
							: "bg-muted text-muted-foreground"
					)}
				>
					{step.id}
				</div>
			</CardContent>
		</Card>
	);
};

interface StepListProps {
	steps: Array<{
		id: number;
		title: string;
		icon: LucideIcon;
		description: string;
	}>;
	currentStep: number;
	setCurrentStep: (step: number) => void;
	setIsPlaying: (isPlaying: boolean) => void;
}

const StepList: React.FC<StepListProps> = ({
	steps,
	currentStep,
	setCurrentStep,
	setIsPlaying,
}) => {
	if (!steps || steps.length === 0) {
		return <div>No steps available.</div>;
	}

	return (
		<div>
			{steps.map((step) => (
				<Step
					key={step.id}
					step={step}
					isActive={currentStep === step.id}
					onClick={() => {
						setCurrentStep(step.id);
						setIsPlaying(false);
					}}
				/>
			))}
		</div>
	);
};

export default StepList;
