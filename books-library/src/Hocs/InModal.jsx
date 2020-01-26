import React from 'react'
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';

const InModal = (Component, modalTitle) => {
	const ModalComp = (props) => {
		const handleCancel = () => {
			props.onHide();
		}
		return (
			<Modal show={props.show} onHide={handleCancel}>
				{modalTitle && (<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
				</Modal.Header>)}

				<Modal.Body>
					<Component
						{...props}
						onCancel={handleCancel}
						onSubmit={handleCancel}
					/>
				</Modal.Body>
			</Modal>
		)
	}
	ModalComp.defaultProps = {
		show: false
	}
	return ModalComp;
}
InModal.propTypes = {
	content: PropTypes.array,
	deleteEntry: PropTypes.func,
	getAllEntries: PropTypes.func,
	onHide: PropTypes.func,
}
InModal.defaultProps = {
	content: [],
	deleteEntry: () => { },
	getAllEntries: () => { },
	onHide: () => { },
}
export default InModal
