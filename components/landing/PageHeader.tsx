import { H2 } from "../typography";

interface PageHeaderProps {
	title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
	return (
		<div className="text-center border border-[bg-fd-muted-foreground] border-dashed grid grid-cols-12">
			<div className="col-span-1 border-r border-[bg-muted-foreground] border-dashed" />
			<H2 className="col-span-10 p-10">{title}</H2>
			<div className="col-span-1 border-l border-[bg-muted-foreground] border-dashed" />
		</div>
	);
};

export default PageHeader;
