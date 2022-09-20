import { HistoryTable } from "./TransactionHistory.styled";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (
        <HistoryTable >
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
            {
                items.map(({id,type,amount,currency}) => {
                    return (
                        <tbody key={id}>
                            <tr>
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                            
                        </tbody>
                    );
        })
}
</HistoryTable>
    );
};

TransactionHistory.propTypes = {
   items:PropTypes.array.isRequired,
}