import React from 'react';

export const CWraper = props => (
  <div style={{ padding: '40px', width: `${props.width}px` || 'auto' }}>
    {props.children}
  </div>
)

export const CItem = props => (
  <div style={{ display: 'flex', padding: '20px' }}>
    <div style={{ flexBasis: '56px', marginRight: '40px', color: '#666' }}>
      {props.label}
    </div>
    <div style={{ flex: 1 }}>{props.children}</div>
  </div>
)
