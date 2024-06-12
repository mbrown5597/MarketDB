import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './AccountTypes.css';

const AccountTypes = () => {
  const [accountType, setAccountType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accountType === '') {
      alert('Please select an account type');
      return;
    }
    // Redirect to the registration page with the selected account type
    // You can use the `useHistory` hook from `react-router-dom` to programmatically navigate to a different page
    // const history = useHistory();
    // history.push(`/register/${accountType}`);
  };

  return (
    <div className="account-types-container">
      <h1 className="title">Create an Account</h1>
      <p className="subtitle">Choose the type of account you would like to create:</p>
      <form onSubmit={handleSubmit} className="form">
        <div className="account-type-options">
          <label>
            <input
              type="radio"
              value="hh"
              checked={accountType === 'agent'}
              onChange={() => setAccountType('agent')}
            />
            Agent Account
          </label>
          <label>
            <input
              type="radio"
              value="business"
              checked={accountType === 'business'}
              onChange={() => setAccountType('business')}
            />
            Business Account
          </label>
        </div>
        <button type="submit" className="button">Continue</button>
      </form>
      <p className="login-link">
        Already have an account? <Link to="/login" className="link">Log in</Link>
      </p>
    </div>
  );
};

export default AccountTypes;