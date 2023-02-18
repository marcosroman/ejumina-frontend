import { useState } from 'react';
//import "../../index.css";

const Bouncer = () => {
	const [search, setSearch] = useState('');
	const testData = [
		{nombre: "Pepito", listas: ["Mengano"]},
		{nombre: "Pepito", listas: ["Mengano"]},
		{nombre: "Pepito", listas: ["Mengano"]},
		{nombre: "Pepito", listas: ["Mengano"]},
		{nombre: "Pepito", listas: ["Mengano"]},
		{nombre: "Pepito", listas: ["Mengano"]},
		{nombre: "Laura Torres", listas: ["Fulano"]},
		{nombre: "Lady Gaga", listas: ["VIP", "Sultano"]},
	];
	const matchingEntries = (data, searchString) =>	
			data.filter(row => row.nombre.toLowerCase()
				                           .includes(searchString.toLowerCase())
							        || row.listas.join().toLowerCase()
				                           .includes(searchString.toLowerCase()));

	return (
		<div className="grid place-items-center h-screen">
			<h1 className="text-red-500 font-bold">(NOMBRE DEL EVENTO)</h1>
			<input className="rounded-lg border-solid border-2 border-sky-200"
		         type="text" name="search" placeholder="Buscar..." value={search}
		         onChange={e => setSearch(e.target.value)} />
		  { search &&
			<table className="w-80 table border-2">
				<thead className="border-2">
					<tr>
						<th>Nombre</th>
						<th>Lista</th>
					</tr>
				</thead>
				<tbody>
					{ matchingEntries(testData, search)
							.map(row => {
								return (
									<tr key={row.nombre.toLowerCase().replaceAll(' ','_')}>
										<td>{row.nombre}</td>
										<td>{row.listas.join(', ')}</td>
									</tr>
								)
							?? "else"})
					}
				</tbody>
			</table>
			}
		</div>
	);
}

export default Bouncer;
