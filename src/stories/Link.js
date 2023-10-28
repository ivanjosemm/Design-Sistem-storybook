import React from 'react';
import "./Link.css";

function Link({ to, children }) {
  return <a className="link" href={to}>{children}</a>;
}
export default Link;
