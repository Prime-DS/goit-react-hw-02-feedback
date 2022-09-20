import {Card} from 'components/Card/Card'
import css from "./CardsBoard.module.css";
import PropTypes from 'prop-types';
export const CardsBoard = ({ cards }) => {
    return (
        <div className={css.cardsBoard}>
            <Card key={cards.username} username={cards.username}
                tag={cards.tag} location={cards.location}
                avatar={cards.avatar} followers={cards.stats.followers}
            views={cards.stats.views} likes={cards.stats.likes}/>
        </div>
    );
};
CardsBoard.propTypes = {
   cards:PropTypes.object.isRequired,
}