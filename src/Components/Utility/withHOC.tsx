import React from 'react';

// HOC = placeholder for higher-order component name

interface WithHOCProps {
  // Define higher-order component props here
  additionalProp?: string;
}

// eslint-disable-next-line
const withHOC = <WrappedComponentProps extends Record<string, any> = Record<string, never>>(
  WrappedComponent: React.FC<WrappedComponentProps & WithHOCProps>,
): React.FC<WrappedComponentProps> => {
  const WithHOC: React.FC<WrappedComponentProps> = ({ ...wrappedComponentProps }) => {
    // Instantiate higher-order component props here
    const hocProps = {};
    // eslint-disable-next-line
    return <WrappedComponent {...wrappedComponentProps} {...hocProps} />;
  };

  const wrappedComponentName = WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component';

  WithHOC.displayName = `withHOC(${wrappedComponentName})`;

  return WithHOC;
};

export default withHOC;
