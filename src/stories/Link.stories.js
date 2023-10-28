import React from 'react';
import Link from './Link';

export default {
  title: 'Design System/Atoms/Link',
  component: Link,
};

export const Default = () => <Link to="#">Home</Link>;
export const External = () => (
  <Link to="https://github.com/ivanjosemm/ivanjosemm.github.io">Link Externo</Link>
);



  