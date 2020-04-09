import React from 'react';

const withRenderLog = (BaseComponent) => (props) => {
  console.log(`@${BaseComponent.name} re-render`);
  return <BaseComponent {...props} />;
};

export default withRenderLog;
