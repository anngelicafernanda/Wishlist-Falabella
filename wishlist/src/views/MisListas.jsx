import React, { useState, useEffect, useContext } from 'react';
import { List } from '../components/List';
import {
	Timestamp,
	addDoc,
	collection
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { ListContext } from '../context/ListContext';
import { Popup } from '../components/Popup';
import {InformationCard} from '../components/InformationCard';

export function MisListas() {
	const { lists, getLists } = useContext(ListContext);
	const [popUp, setPopUp] = useState(false);

	useEffect(() => {
		getLists();
	}, []);

	const createList = (name) => {
		addDoc(collection(db, 'lists'), {
			date: Timestamp.fromDate(new Date()),
			name: name,
			products: [],
			userId: 'JuanaPerez1234',
		});
		setPopUp(false);
	};

	return (
		<>
			{lists.length === 0 && (
				<>
					<div className="grid gap-10 grid-cols-2 grid-rows-2 ">
						<div>
							<h1 className="text-[24px] text-[#333333]">Mis Listas</h1>
							<p className="text-[16px] text-[#333333]">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
								feugiat ut fringilla eu fusce urna donec nisl, bibendum.{' '}
							</p>
						</div>
						<div>
							<button
								className="btn-orange text-[19px]"
								onClick={() => setPopUp(true)}
							>
								Crear Lista+
							</button>
							<Popup
								trigger={popUp}
								setTrigger={setPopUp}
								title={<h4>Nueva Lista</h4>}
								desc={<p>Dale nombre a tu lista</p>}
								btnName={'Crear lista'}
								clickFunction={createList}
							/>
						</div>
						<InformationCard
							icon={<img></img>}
							title="Organiza/ Ahorra tiempo"
							description="Enim feugiat ut fringilla eu fusce urna donec nisl, bibendum. "
						/>
						<InformationCard
							icon={<img></img>}
							title="Regala"
							description="Enim feugiat ut fringilla eu fusce urna donec nisl, bibendum. "
						/>
					</div>
				</>
			)}
			{lists.length !== 0 && (
				<>
					<div className="w-[240px]">
						<button className="btn-orange" onClick={() => setPopUp(true)}>
							Crear Lista+
						</button>
						<Popup
							trigger={popUp}
							setTrigger={setPopUp}
							title={<h4>Nueva Lista</h4>}
							desc={<p>Dale nombre a tu lista</p>}
							btnName={'Crear lista'}
							clickFunction={createList}
						/>
					</div>
					<h2 className="text-color-listTitle text-[16px]">Mis Listas</h2>

					<div>
						{lists.map((list) => (
							<List key={list.docId} list={list} />
						))}
					</div>
				</>
			)}
		</>
	);
}
