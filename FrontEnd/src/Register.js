import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Login from './logi';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        account_type: '',
        job_function: '',
        state: '',
        });
        const [emailError, setEmailError] = useState('');
        const [passwordError, setPasswordError] = useState('');
        const [confirmPasswordError, setConfirmPasswordError] = useState('');
    
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
        useEffect(() => {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
            if (!emailRegex.test(formData.email)) {
              setEmailError('Please enter a valid email address.');
            } else {
              setEmailError('');
            }
          }, [formData.email]);

        useEffect(() => {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        
            if (!passwordRegex.test(formData.password)) {
                setPasswordError('Password must be at least 8 characters long, containing uppercase lowercase letter numbers, special character.');
              } else {
                setPasswordError('');
              }
          }, [formData.password]);

        useEffect(() => {
            if (formData.password!== formData.confirmPassword) {
              setConfirmPasswordError('Passwords do not match.');
            } else {
              setConfirmPasswordError('');
            }
          }, [formData.password, formData.confirmPassword]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError || passwordError || confirmPasswordError) {
        return;
      }
      try {
    const usernameResponse = await axios.get(`http://localhost:5000/check-username/${formData.username}`);
    if (usernameResponse.data.exists) {
      alert('Username already taken. Please choose a different one.');
      return;
    }
        
        const response = await axios.post('http://localhost:5000/register', formData);

      if (response.status === 200) {
        // Clear the form fields
        setFormData({
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          account_type: '',
          job_function: '',
          state: '',
        });

        // Display a success message
        window.location.href = '/login';
      }
         else {
          // Display an error message
          alert('Error registering user');
        }
      } catch (err) {
        console.error(err);
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange}/>
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {emailError && <p className="error">{emailError}</p>}
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {passwordError && <p className="error">{passwordError}</p>}
      </label>
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
      </label>
      <label>
        Account Type:
        <select name="account_type" value={formData.account_type} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="AgentAccount">Agent account</option>
          <option value="CompanyAccount">Company account</option>
        </select>
      </label>
      <label>
        Job Function:
        <select name="job_function" value={formData.job_function} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="Underwriter">Underwriter</option>
          <option value="Broker">Broker</option>
          <option value="ClaimsAdjuster">Claims Adjuster</option>
          <option value="RiskManager">Risk Manager</option>
        </select>
      </label>
      <label>
        State:
        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Louisiana">Louisiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="NewHampshire">New Hampshire</option>
          <option value="NewJersey">New Jersey</option>
          <option value="NewMexico">New Mexico</option>
          <option value="NewYork">New York</option>
          <option value="NorthCarolina">North Carolina</option>
          <option value="NorthDakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="RhodeIsland">Rhode Island</option>
          <option value="SouthCarolina">South Carolina</option>
          <option value="SouthDakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="WestVirginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </select>
      </label>
      <button type="submit">Submit</button>
      <label>Already have an account? </label> <a href='/login'>Sign in</a>
    </form>
  );
}

export default RegistrationForm;