import React, { useState } from "react";
import "./tour.scss";

const Tour = ({ tour: { id, city, img, name, info }, removeTour }) => {
	const [showInfo, setShowInfo] = useState(false);

	return (
		<article className="tour">
			<div className="img-container">
				<img src={img} alt="tour" />
				<span className="close-btn">
					<i className="fas fa-window-close" />
				</span>
			</div>
			<div className="tour-info">
				<h3>{name}</h3>
				<h4>{city}</h4>
				<h5>
					info{" "}
					<span>
						<i
							className="fas fa-caret-square-down"
							onClick={() => setShowInfo(!showInfo)}
						/>
					</span>
				</h5>
				{showInfo && <p>{info}</p>}
			</div>
		</article>
	);
};

export default Tour;
