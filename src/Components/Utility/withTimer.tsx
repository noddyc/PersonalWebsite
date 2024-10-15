/* eslint-disable react/jsx-props-no-spreading */
import { ComponentType } from 'react';

// eslint-disable-next-line
function withTimer<U, WrappedComponentProps extends Record<string, any> = Record<string, never>>(
  WrappedComponent: ComponentType<WrappedComponentProps & U>,
) {
  return (additionalProps: U) => {
    const enhancedComponent = (hocProps: WrappedComponentProps) => (
      <WrappedComponent {...hocProps} {...additionalProps} />
    );
    const wrappedComponentName = WrappedComponent.displayName ?? WrappedComponent.name ?? 'Component';
    enhancedComponent.displayName = `withHOC(${wrappedComponentName})`;
    return enhancedComponent;
  };
}

export default withTimer;
