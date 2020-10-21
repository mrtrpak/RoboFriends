import React from 'react';

import CardList from './CardList';
import { robots } from './robots';

export default function App() {
  return (
    <CardList robots={robots} />
  );
};