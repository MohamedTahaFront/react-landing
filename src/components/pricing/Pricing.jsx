import "./Pricing.css";
const Pricing = () => {
  return (
    <div className="Pricing" id="pricing">
      <h3 className=" font-24 m-18 align-center">PRICING</h3>
      <p className=" font-18 m-10 align-center">
        Choose a pricing plan that fits your needs.
      </p>
      <div className="container">
        <div className="box">
          <p className="font-24 top">
            Basic
          </p>
          <ul>
            <li>
              <b>10GB</b>
              Storage
            </li>
            <li>
              <b>10</b>
              Emails
            </li>
            <li>
              <b>10</b>
              Domains
            </li>
            <li>
              <b>Endless</b>
              Support
            </li>
            <li>
              <h2>$ 10</h2>
              <span>per month</span>
            </li>
            <li>
              <button>Sign Up</button>
            </li>
          </ul>
        </div>
        <div className="box">
          <p className="font-24 pro">
            Pro
          </p>
          <ul>
            <li>
              <b>25GB</b>
              Storage
            </li>
            <li>
              <b>25</b>
              Emails
            </li>
            <li>
              <b>25</b>
              Domains
            </li>
            <li>
              <b>Endless</b>
              Support
            </li>
            <li>
              <h2>$ 25</h2>
              <span>per month</span>
            </li>
            <li>
              <button>Sign Up</button>
            </li>
          </ul>
        </div>
        <div className="box">
          <p className="font-24 top">
            Premium
          </p>
          <ul>
            <li>
              <b>50GB</b>
              Storage
            </li>
            <li>
              <b>50</b>
              Emails
            </li>
            <li>
              <b>50</b>
              Domains
            </li>
            <li>
              <b>Endless</b>
              Support
            </li>
            <li>
              <h2>$ 50</h2>
              <span>per month</span>
            </li>
            <li>
              <button>Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
