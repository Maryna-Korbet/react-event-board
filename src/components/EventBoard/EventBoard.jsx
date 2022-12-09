import PropTypes from 'prop-types';
import css from '../EventBoard/EventBoard.module.css';

export const EventBoard = ({ events }) => {
    return <div className={css.eventBoard}>Event cards</div>;
}

EventBoard.propTypes = {
    events: PropTypes.array.isRequired,
}