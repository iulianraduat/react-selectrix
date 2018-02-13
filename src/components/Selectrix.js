import React from 'react';
import 'scss/react-selectrix.scss';
import PropTypes from 'prop-types';
import App from 'components/App/';

export default class Selectrix extends React.Component {

	constructor( props ) {

		super( props );

		const methods = [
			'handleMouseMove'
		];

		methods.forEach( method => this[ method ] = this[ method ].bind( this ) );

		this.ref = null;
		this.rsBodyRef = null;

	}

	handleMouseMove() {
		if( ! this.state.mouseEventLocked ) {
			return;
		}
		this.setState( {
			mouseEventLocked: false
		} )
	}

	componentWillMount() {
		this.props.setupInstance( this.props );
	}

	render() {

		return(
			<App />
		);

	}
}

Selectrix.defaultProps = {
	options: [],
	height: 190,
	className: '',
	isOpen: false,
	placeHolderInside: true,
	placeholder: 'Please Select',
	arrow: true,
	selected: [],
	multiple: false,
	disabled: false,
	onChange: () => {},
	customScrollbar: false,
	searchable: true,
	initialized: false,
	commaSeperated: false,
	singleLine: false,
	lifo: false,
	selectAllButton: false,
	checkBoxes: false,
	materialize: false,
	isDropDown: false,
	customKeys: false,
	ajax: false,
	onRenderOption: false,
	onRenderSelection: false,
	tags: false
}

Selectrix.propTypes = {
	options: PropTypes.array.isRequired,
	height: PropTypes.oneOfType( [
		PropTypes.number,
		PropTypes.string,
	] ),
	className: PropTypes.string,
	isOpen: PropTypes.bool,
	placeHolderInside: PropTypes.bool,
	placeholder: PropTypes.string,
	arrow: PropTypes.bool,
	selected: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.array,
		PropTypes.bool
	] ),
	multiple: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	customScrollbar: PropTypes.bool,
	searchable: PropTypes.bool,
	stayOpen: PropTypes.bool,
	commaSeperated: PropTypes.bool,
	singleLine: PropTypes.bool,
	lifo: PropTypes.bool,
	selectAllButton: PropTypes.bool,
	checkBoxes: PropTypes.bool,
	materialize: PropTypes.bool,
	isDropDown: PropTypes.bool,
	customKeys: PropTypes.oneOfType( [
		PropTypes.object,
		PropTypes.bool
	] ),
	ajax: PropTypes.oneOfType( [
		PropTypes.object,
		PropTypes.bool
	] ),
	onRenderOption: PropTypes.oneOfType( [
		PropTypes.func,
		PropTypes.bool
	] ),
	onRenderSelection: PropTypes.oneOfType( [
		PropTypes.func,
		PropTypes.bool
	] ),
	tags: PropTypes.bool,
	setupInstance: PropTypes.func.isRequired
}
