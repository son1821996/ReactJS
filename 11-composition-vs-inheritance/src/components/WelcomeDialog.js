import React, { Component } from 'react';
import FancyBorder from './FancyBorders';

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Title
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
      </FancyBorder>
  );
}

export default WelcomeDialog;