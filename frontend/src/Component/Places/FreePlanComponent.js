import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FreePlanComponent.css';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-check-circle-fill_places mr-2"
    viewBox="0 0 16 16"
  >
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </svg>
);

const FreePlan = () => {
  return (
    <div className="freeplan-container_places my-5" id="onefree_places">
      <div className="row vertical-center-flex">
        <div className="col-lg-6 my-auto">
          <h2 className="freeplan-title_places">One free multi-page site</h2>
            <p className="freeplan-description_places">
              Develop a website and promote your company or personal brand for free. As your business grows, you can leverage more features and marketing tools.
            </p>
        </div>
        <div className="col-lg-6">
          <div className="freeplan-card_places p-4">
            <h4>Our free plan includes</h4>
            <ul className="list-unstyled freeplan-list_places">
            <li><CheckIcon />1 website or bio link page</li>
            <li><CheckIcon />50 website pages with responsive design</li>
            <li><CheckIcon />100 MB of image storage</li>
            <li><CheckIcon />Domain name and SSL certificate</li>
            <li><CheckIcon />10,000 page views</li>
            <li><CheckIcon />24/7 support</li>
            <li><CheckIcon />Leverage our landing page builder for free forever or upgrade to a paid pricing plan if necessary.</li>
            </ul>
            <button className="btn btn-primary_places btn-lg w-100 mt-3">Sign up for free</button>
            <p className="text-secondary mt-3">No credit card required</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreePlan;
