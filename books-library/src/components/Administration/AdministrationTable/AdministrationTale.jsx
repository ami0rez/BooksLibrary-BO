import React, { useState } from 'react'
import PropTypes from 'prop-types';

import BootstrapTable from 'react-bootstrap-table-next';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import InModal from '../../../Hocs/InModal';

import './admin.css'
const AdministrationTable = ({ content, entityName, deleteEntry, getAllEntries, Form }) => {
	const [formModalData, setFormModalData] = useState({ show: false, entry: undefined });
	useEffect(() => {
		getAllEntries(entityName);
	}, [])
	const handleShowModal = (entry) => {
		setFormModalData({ entry, show: true });
	}
	const handleFormHide = () => {
		setFormModalData({ show: false, entry: undefined });
	}
	console.log(Form);

	const FormModal = InModal(Form);
	const actionsFormatter = (cell, row) => {
		return (
			<div>
				<Button
					type="button"
					onClick={() => handleShowModal(row)}
				>Update</Button>
				<Button
					type="button"
					onClick={() => deleteEntry(entityName, row.id)}
					variant="danger"
				>
					Delete
				</Button>
			</div>
		)
	}
	const listFormatter = (cell, row) => {
		if (Array.isArray(cell)) {
			return (
				<ul>
					{
						cell.map((item) => (
							<li key="item">{item.name}</li>
						))
					}
				</ul>
			)
		} else {
			return (<div>{`${cell.firstName || ''} ${cell.lastName || ''}`}</div>);
		}

	}
	const columns = content.length
		? [
			...Object.keys(content[0]).map((entry) => (
				(Array.isArray(content[0][entry]) || Object.keys(content[0][entry]).length)
					? { dataField: entry, text: entry, formatter: listFormatter, }
					: { dataField: entry, text: entry }
			)
			),
			{
				text: "Actions",
				formatter: actionsFormatter,
			}
		]
		: ["none"];
	return (
		<div id="admin-table">
			<div id="admin-table-controls">
				Manage {entityName}
				<Button
					onClick={() => handleShowModal()}
				>
					Add
				</Button>
			</div>
			<div id="admin-table-table">
				<BootstrapTable
					keyField='id'
					data={content}
					columns={columns}
				/>
			</div>
			{FormModal &&
				(
					<FormModal
						show={formModalData.show}
						entry={formModalData.entry}
						onHide={handleFormHide}
					/>
				)
			}
		</div>
	)
}
AdministrationTable.propTypes = {
	content: PropTypes.array,
	deleteEntry: PropTypes.func,
	getAllEntries: PropTypes.func,
}
AdministrationTable.defaultProps = {
	content: [],
	deleteEntry: () => { },
	getAllEntries: () => { },
}
export default AdministrationTable
