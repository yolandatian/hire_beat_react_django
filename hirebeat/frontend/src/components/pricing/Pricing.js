import React from "react";

const BasicPrice = () => {
  return <p style={{ color: "#FF6B00", fontSize: 50 }}>$Free</p>;
};

const PremiumPrice = () => {
  return (
    <div className="d-flex">
      <p
        className="strikethrough"
        style={{
          color: "#FF6B00",
          fontSize: 50,
        }}
      >
        $10
      </p>
      <p style={{ color: "black", fontSize: 30, paddingTop: 20 }}>/mo</p>
    </div>
  );
};

const PriceButton = (props) => {
  // onTap, textDisplayed
  return (
    <button
      style={{
        WebkitBorderRadius: "20px",
        background: "#FF6B00",
        border: "none",
        width: "80%",
        height: 40,
        marginTop: 50,
        padding: 0, // key to center text in button
      }}
      onClick={props.onTap}
    >
      <p
        style={{
          fontSize: "1vw",
          fontWeight: "bold",
          marginBottom: 0,
          color: "white",
        }}
      >
        {props.textDisplayed}
      </p>
    </button>
  );
};

const PriceCard = (props) => {
  return (
    <div
      className="col-3"
      style={{
        borderRadius: "8px",
        marginLeft: props.first ? "20%" : 0,
        marginRight: props.first ? 0 : "20%",
        backgroundColor: "white",
        height: 400,
      }}
    >
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 style={{ marginBottom: 20 }}>img</h1>
        <h2>{props.first ? "Basic" : "Premium"}</h2>
        <p className="text-muted">
          {props.first ? "Practice interview" : "Prepare for job seaking"}
        </p>
        {props.first ? <BasicPrice /> : <PremiumPrice />}
        <p className="text-muted">
          {props.first ? "5 saved videos" : "10 saved videos"}
        </p>
        {props.first ? (
          <PriceButton onTap={() => {}} textDisplayed={"Try this plan"} />
        ) : (
          <PriceButton onTap={() => {}} textDisplayed={"Upgrade for free"} />
        )}
      </div>
    </div>
  );
};

export default function Pricing() {
  return (
    <div
      className="container-fluid"
      style={{
        padding: 0,
        backgroundColor: "white",
      }}
    >
      <div className="pricing-bg">
        <div
          className="container d-flex flex-column justify-content-center align-items-center"
          style={{ paddingTop: 50 }}
        >
          <h1 style={{ color: "white", marginBottom: 50 }}>
            Transparent & Simple Pricing
          </h1>
          <h4 style={{ color: "white", marginBottom: 50 }}>
            Get interview analytics with HireBeat plan. Try Premium for free.
          </h4>
          <div
            className="row d-flex justify-content-around"
            style={{ width: "100%" }}
          >
            <PriceCard first={true} />
            <PriceCard first={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
