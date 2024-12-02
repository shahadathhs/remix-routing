import React from 'react';
import PropTypes from 'prop-types';

interface PricingPlanProps {
  title: string;
  price: string;
  perks: string[];
  icon: React.ComponentType;
}

export default function PricingPlan({ title, price, perks, icon }: Readonly<PricingPlanProps>) {
  const Icon = icon;
  return (
    <article>
      <header>
        <div className="icon">
          <Icon />
        </div>
        <h2>{title}</h2>
        <p>{price}</p>
      </header>
      <div className="plan-content">
        <ol>
          {perks.map((perk) => (
            <li key={perk}>{perk}</li>
          ))}
        </ol>
        <div className='actions'>
          <a href="/not-implemented">Learn More</a>
        </div>
      </div>
    </article>
  );
}

PricingPlan.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  perks: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.elementType.isRequired,
};