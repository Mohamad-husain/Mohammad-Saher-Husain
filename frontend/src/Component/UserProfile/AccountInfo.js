import React from 'react';
import '../UserProfile/AccountInfo.css';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function AccountInfo() {
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
        "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
        "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
        "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the",
        "Costa Rica", "Côte d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica",
        "Dominican Republic", "East Timor (Timor-Leste)", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea",
        "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
        "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
        "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan",
        "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
        "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
        "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
        "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
        "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
        "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
        "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka",
        "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo",
        "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
        "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
        "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];
    


    const formik = useFormik({
        initialValues: {
            password: '',
            showPassword: false,
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            city: '',
            country: '',
            phoneNumber: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            address: Yup.string().required('Address is required'),
            city: Yup.string().required('City is required'),
            country: Yup.string().required('Country is required'),
            phoneNumber: Yup.string().required('Phone number is required').matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
            password: Yup.string().required('Password is required')
                .min(5, 'Password must be at least 5 characters long')
                .max(16, 'Password must be at most 16 characters long')
                .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                .matches(/[0-9]/, 'Password must contain at least one number')
                .matches(/[@&*]/, 'Password must contain at least one special character (@, &, *)'),
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const response = await axios.post('http://localhost:5000/createUser', values);
                console.log(response);
                resetForm();
            } catch (error) {
                console.error('Error adding info:', error);
            }
            setSubmitting(false);
        },

    });

    const togglePasswordVisibility = () => {
        formik.setFieldValue('showPassword', !formik.values.showPassword);
    };

    const handleCancel = () => {
        if (window.confirm('Are you sure you want to clear the inputs?')) {
            formik.resetForm();
        }
    };

    return (
        <div>
            <div className="titAccount">
                <h2>Account Info</h2>
            </div>

            <div className="lineAccount">
                <h2>_________________________________________________________________________________________________________________________</h2>
            </div>

            <form onSubmit={formik.handleSubmit}>
                <div className="rowAccount">
                    <div>
                        <div className="form-group field">
                            <label htmlFor="firstName" className="form-label-2 test2Account">First Name</label>
                            <input
                                type="text"
                                className="form-field-2 AccountInput"
                                placeholder="First name..."
                                name="firstName"
                                id="firstName"
                                required
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                                <div className="error-message">{formik.errors.firstName}</div>
                            ) : null}
                        </div>
                    </div>
                    <div>
                        <div className="form-group field">
                            <label htmlFor="lastName" className="form-label-2 test2Account">Last Name</label>
                            <input
                                type="text"
                                className="form-field-2 AccountInput"
                                placeholder="Last name..."
                                name="lastName"
                                id="lastName"
                                required
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.lastName && formik.errors.lastName ? (
                                <div className="error-message">{formik.errors.lastName}</div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="rowAccount">
                    <div>
                        <div className="form-group field">
                            <label htmlFor="email" className="form-label-3 test3Account">Email</label>
                            <input
                                type="text"
                                className="form-field-3 AccountInput"
                                placeholder="Email..."
                                name="email"
                                id="email"
                                required
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="error-message">{formik.errors.email}</div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="rowAccount">
                    <div>
                        <div className="form-group field">
                            <label htmlFor="address" className="form-label-4 test4Account">Address</label>
                            <input
                                type="text"
                                className="form-field-4 AccountInput"
                                placeholder="Street address..."
                                name="address"
                                id="address"
                                required
                                value={formik.values.address}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.address && formik.errors.address ? (
                                <div className="error-message">{formik.errors.address}</div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="rowAccount">
                    <div>
                        <div className="form-group field">
                            <label htmlFor="city" className="form-label-5 test5Account">City</label>
                            <input
                                type="text"
                                className="form-field-5 AccountInput"
                                placeholder="City..."
                                name="city"
                                id="city"
                                required
                                value={formik.values.city}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.city && formik.errors.city ? (
                                <div className="error-message">{formik.errors.city}</div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="rowAccount">
                    <div>
                        <div className="form-group field">
                            <label htmlFor="country" className="form-label-6 test6Account">Country</label>
                            <div className="form-field-6">
                                <div>
                                    <select
                                        name="country"
                                        id="country"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.country}
                                    >
                                        <option value="">Select a country...</option>
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </select>
                                    {formik.touched.country && formik.errors.country ? (
                                        <div className="error-message">{formik.errors.country}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rowAccount">
                    <div>
                        <div className="form-group field">
                            <label htmlFor="phoneNumber" className="test7Account">Phone Number</label>
                            <input
                                type="phonenumber"
                                className="form-field-7 AccountInput"
                                placeholder="Phone number..."
                                name="phoneNumber"
                                id="phoneNumber"
                                required
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                <div className="error-message">{formik.errors.phoneNumber}</div>
                            ) : null}
                        </div>
                    </div>
                </div>

                <div className="rowAccount">
                    <div>
                        <div className="form-group field">
                            <label htmlFor="password" className="test8Account">Password</label>
                            <div>
                                <div className="password-field">
                                    <input
                                        className="AccountInput"
                                        type={formik.values.showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        name="password"
                                        id="password"
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                    <button type="button" className="AccountButton" onClick={togglePasswordVisibility}>
                                        <svg className="AccountSvg"  viewBox="0 0 21 21">
                                            <circle className="eye" cx="10.5" cy="10.5" r="2.25" />
                                            <path className="top" d="M2 10.5C2 10.5 6.43686 5.5 10.5 5.5C14.5631 5.5 19 10.5 19 10.5" />
                                            <path className="bottom" d="M2 10.5C2 10.5 6.43686 15.5 10.5 15.5C14.5631 15.5 19 10.5 19 10.5" />
                                            <g className="lashes">
                                                <path d="M10.5 15.5V18" />
                                                <path d="M14.5 14.5L15.25 17" />
                                                <path d="M6.5 14.5L5.75 17" />
                                                <path d="M3.5 12.5L2 15" />
                                                <path d="M17.5 12.5L19 15" />
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="error-message">{formik.errors.password}</div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lineAccount">
                    <h2>_________________________________________________________________________________________________________________________</h2>
                </div>

                <div className="rowAccount">
                    <div>
                        <div className="butAccount">
                            <div className="flex-grid-center" style={{ marginRight: "600px" }}>
                                <button type="submit" className="pure-button fuller-button blue AccountButton">Save</button>
                                <button type="button" className="pure-button fuller-button red AccountButton" onClick={handleCancel}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AccountInfo;