import trash from '../images/trash.png'

export const CountProducts = ({
	nameList,
	productCounter,
	products,
	icon,
	imgProduct,
}) => {
	return (
		<div className="rounded border border-slate-300 h-[126px] mt-4 p-4">
			<h1 className="text-black font-bold text-[18px]">
				{nameList} ({productCounter})
			</h1>
			<div className="text-black flex justify-between items-center">
				<div className="flex ">
					{productCounter === 0 && (
						<h3 className="pt-4 text-black text-[14px]">{products}</h3>
					)}
					{imgProduct && (
						<div className="icon pt-4 bg-container">
							<img src={imgProduct} alt="" className="w-[47px] h-auto" />
						</div>
					)}
				</div>
				<img src={trash} alt="Eliminar" className="w-[20px] h-auto" />
			</div>
		</div>
	);
};
