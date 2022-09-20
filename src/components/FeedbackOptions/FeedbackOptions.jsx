import{Btn} from './FeedbackOptions.styled';

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return (
         <div>
            <Btn type="button" onClick={()=>{onLeaveFeedback(options[0])}}>Good</Btn>
            <Btn type="button" onClick={()=>{onLeaveFeedback(options[1])}}>Bad</Btn>
            <Btn type="button" onClick={()=>{onLeaveFeedback(options[2])}}>Neutral</Btn>
        </div>
    )
}