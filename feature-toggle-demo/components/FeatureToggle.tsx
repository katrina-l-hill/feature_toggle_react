import React from 'react';
import { View, Text } from 'react-native';

type FeatureToggleProps = {
    isEnabled: boolean;
    featureName: string;
  };
  
  const FeatureToggle = ({ isEnabled, featureName }: FeatureToggleProps) => {
    return (
      <View>
        {isEnabled ? (
          <Text>{featureName}</Text>
        ) : (
          <Text>Feature {featureName} is disabled</Text>
        )}
      </View>
    );
  };

  export default FeatureToggle;