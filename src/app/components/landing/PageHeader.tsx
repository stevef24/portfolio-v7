import { H2 } from "../typography";

interface PageHeaderProps {
	title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
	return (
		<div className="text-center border border-[var(--color-border)] border-dashed grid grid-cols-12">
			<div className="col-span-1 border-r border-[var(--color-border)] border-dashed" />
			<H2 className="col-span-10 p-10">{title}</H2>
			<div className="col-span-1 border-l border-[var(--color-border)] border-dashed" />
		</div>
	);
};

export default PageHeader;
