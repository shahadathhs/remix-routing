import PropTypes from 'prop-types';

interface FormattedDateProps {
  date: string | number | Date;
}

export default function FormattedDate({ date }: Readonly<FormattedDateProps>) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return <time dateTime={new Date(date).toISOString()}>{formattedDate}</time>;
}

FormattedDate.propTypes = {
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.instanceOf(Date)
  ]).isRequired,
};