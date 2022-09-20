import PropTypes from 'prop-types';
import { StatisticList, Title, Wrapper, } from "./Statistics.styled";
import { Element } from "../Element/Element";


export const StatisticsList = ({stats})=>{
    return (
      <Wrapper>
        
        <Title>Upload stats</Title>
  <StatisticList>      
    {
      stats.map(({ id, label, percentage }) => {
        return <Element
        key={id}
        label={label}
        percentage={percentage}
        />
          }) 
    }       
        </StatisticList>
        </Wrapper>
  );
};

StatisticsList.propTypes = {
  stats:PropTypes.array.isRequired,
}
