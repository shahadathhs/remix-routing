import { Link } from '@remix-run/react';
import PropTypes from 'prop-types';

interface ExpenseListItemProps {
  id: string;
  title: string;
  amount: number;
}

export default function ExpenseListItem({ id, title, amount }: Readonly<ExpenseListItemProps>) {
  function deleteExpenseItemHandler() {
    // tbd
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}
ExpenseListItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};
