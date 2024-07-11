import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function WallComponent(props: {type: 'corner' | 'straight'}) {
  return (
    <View>
      <Text>WallComponent</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
