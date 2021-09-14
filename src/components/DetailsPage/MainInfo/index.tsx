import './style.scss';

const MainInfo = ({ name, alcoholic, glass, category, thumbnail }: IProps) => {
	return (
		<section className="detailsMainInfo">
			<div
				className="thumbnail"
				style={{ backgroundImage: `url('${thumbnail}')` }}
			></div>
			<h1 className="drinkName">{name}</h1>
			<div className="drinkInfo">
				<ul>
					<li className="alcoholic">
						<span>% : </span>
						{alcoholic}
					</li>
					<li className="glass">
						<span>U : </span>
						{glass}
					</li>
					<li className="category">
						<span> Type : </span>
						{category}
					</li>
				</ul>
			</div>
		</section>
	);
};

export default MainInfo;

type IProps = {
	alcoholic: string;
	glass: string;
	category: string;
	thumbnail: string;
	name: string;
};
