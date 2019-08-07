import React from 'react';

const TableHead = () => (
	<thead>
		<tr className="table__row table__row--head">
			<th className="table__cell table__cell--head">Название</th>
			<th className="table__cell table__cell--head">Расход топлива мл/г</th>
			<th className="table__cell table__cell--head">Цилиндры</th>
			<th className="table__cell table__cell--head">Рабочий объём</th>
			<th className="table__cell table__cell--head">Л.C</th>
			<th className="table__cell table__cell--head">Вес</th>
			<th className="table__cell table__cell--head">Ускорение м/c2</th>
			<th className="table__cell table__cell--head">Год выпуска</th>
			<th className="table__cell table__cell--head">Производство</th>
		</tr>
	</thead>
);

export default TableHead;