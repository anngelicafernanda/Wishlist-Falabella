export const InformationCard = ({ title, description, icon }) => {
	return (
		<div className="bg-container flex  p-4">
			{icon}
			<div className="m-2">
				<h1 className="font-bold text-[18px]">{title}</h1>
				<p className=" text-info text-[18px] ">{description}</p>
			</div>
		</div>
	);
};
