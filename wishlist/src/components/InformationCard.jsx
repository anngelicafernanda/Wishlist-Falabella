export const InformationCard = ({ title, description, icon }) => {
	return (
		<div className="bg-container flex  p-4">
			<img className="w-[39px]" src={icon} alt="" />
			<div className="m-2">
				<h1 className="font-bold text-[18px] text-[#333333]">{title}</h1>
				<p className=" text-info text-[18px] text-[#4A4A4A]">{description}</p>
			</div>
		</div>
	);
};
