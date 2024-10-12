import React from 'react';
import { commonStyles } from './styles/commonStyles';

const SomeListComponent = ({ items }) => {
  return (
    <div style={commonStyles.container}>
      <div style={commonStyles.card}>
        <h2 style={commonStyles.title}>項目列表</h2>
        <ul style={commonStyles.list}>
          {items.map((item, index) => (
            <li key={index} style={commonStyles.listItem}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SomeListComponent;