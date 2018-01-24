import React, { Component } from 'react'
import Modal from 'react-modal';
import { reduxForm, Field } from 'redux-form'
import { Popover } from 'react-bootstrap'

const required = value => value ? undefined : 'Campo obrigatório';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <input {...input} placeholder={label} type={type} className={'form-control ' + (touched && error ? 'error-input' : '')} />
        {touched && (error && <Popover id='popover-error' placement='top'>{error}</Popover>)}
    </div>
);

class FormModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: true,
            errors: false
        }

        this.keyHandler = this.keyHandler.bind(this)
        this.confirmAction = this.confirmAction.bind(this)
        this.close = this.close.bind(this)
    }

    /* Component of Lifecycle 'React' is called in change of the state */
    componentWillReceiveProps(nextProps) {
        if (nextProps.invalid) {
            this.setState({ errors: true });
        } else {
            this.setState({ errors: false });
        }
    }

    /* Function that performs an action when to press a key */
    keyHandler(e) {
        if (e.key === 'Enter') {
            if (!this.state.errors) {
                this.confirmAction()
            }
        } else if (e.key === 'Escape') {
            this.close()
        }
    }

    confirmAction() {
        this.setState({ showModal: false })
        this.props.confirmForm()
        this.props.handleSubmit()
    }

    close() {
        this.setState({ showModal: false })
        this.props.cancelForm()
    }

    render() {
        const { handleSubmit } = this.props
        const customStyles = {
            overlay: {
                position: 'fixed',
                backgroundColor: 'rgba(0, 0, 0, 0.6)'
            },
            content: {
                top: '10%',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                outline: 'none'
            }
        };

        return (
            <div onKeyUp={this.keyHandler}>
                <Modal
                    isOpen={this.state.showModal}
                    onRequestClose={this.closeModal}
                    className='modal-dialog'
                    style={customStyles}
                    ariaHideApp={false}
                >
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={this.close}>
                                <span aria-hidden='true'>&times;</span>
                            </button>
                            <h4 className='modal-title'>{this.props.formModalTitle}</h4>
                        </div>
                        <div className='modal-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='type'>Tipo</label>
                                        <Field name='type' component={renderField} validate={required} className='form-control' id='type' placeholder='Tipo' />
                                    </div>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='hostname'>Hostname</label>
                                        <Field name='hostname' component={renderField} validate={required} className='form-control' id='hostname' placeholder='Hostname' />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='ip_address'>Endereço IP</label>
                                        <Field name='ip_address' component={renderField} validate={required} className='form-control' id='ip_address' placeholder='Endereço IP' />
                                    </div>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='location'>Localização</label>
                                        <Field name='location' component={renderField} validate={required} className='form-control' id='location' placeholder='Localização' />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='fabricator'>Fabricante</label>
                                        <Field name='fabricator' component={renderField} validate={required} className='form-control' id='fabricator' placeholder='Fabricante' />
                                    </div>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='model'>Modelo</label>
                                        <Field name='model' component={renderField} validate={required} className='form-control' id='model' placeholder='Modelo' />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='serial'>Serial</label>
                                        <Field name='serial' component={renderField} validate={required} className='form-control' id='serial' placeholder='Serial' />
                                    </div>
                                    <div className='form-group col-md-6'>
                                        <label htmlFor='so_version'>Versão SO</label>
                                        <Field name='so_version' component={renderField} validate={required} className='form-control' id='so_version' placeholder='Versão SO' />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' className='btn btn-secondary' data-dismiss='modal' onClick={this.close}>Cancelar</button>
                            <button type='button' className='btn btn-dark' disabled={this.state.errors}
                                onClick={this.confirmAction}>{this.props.formModalButton}</button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default reduxForm({ form: 'equipmentForm', destroyOnUnmount: false })(FormModal);