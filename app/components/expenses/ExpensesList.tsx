import PropTypes from 'prop-types';
import ExpenseListItem from './ExpenseListItem';

interface Expense {
  id: string;
  title: string;
  amount: number;
}

interface ExpensesListProps {
  expenses: Expense[];
}

export default function ExpensesList({ expenses }: Readonly<ExpensesListProps>) {
  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

ExpensesList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};