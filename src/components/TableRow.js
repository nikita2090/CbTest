import React from "react";
import PropTypes from 'prop-types';

const TableRow = ({ car: {Name, Miles_per_Gallon,
		                  Cylinders, Displacement,
		                  Horsepower, Weight_in_lbs,
		                  Acceleration, Year, Origin}
                  }) => (
	<tr className="table__row">
		<td className="table__cell">{Name}</td>
		<td className="table__cell">{Miles_per_Gallon}</td>
		<td className="table__cell">{Cylinders}</td>
		<td className="table__cell">{Displacement}</td>
		<td className="table__cell">{Horsepower}</td>
		<td className="table__cell">{Weight_in_lbs}</td>
		<td className="table__cell">{Acceleration}</td>
		<td className="table__cell">{Year}</td>
		<td className="table__cell">{Origin}</td>
	</tr>
);

TableRow.propTypes = {
	Name: PropTypes.string,
	Miles_per_Gallon: PropTypes.number,
	Cylinders: PropTypes.number,
	Displacement: PropTypes.number,
	Horsepower: PropTypes.number,
	Weight_in_lbs: PropTypes.number,
	Acceleration: PropTypes.number,
	Year: PropTypes.number,
	Origin: PropTypes.string,
};

TableRow.defaultProps = {
	Name: '',
	Miles_per_Gallon: null,
	Cylinders: null,
	Displacement: null,
	Horsepower: null,
	Weight_in_lbs: null,
	Acceleration: null,
	Year: null,
	Origin: '',
};

export default TableRow;
