import React from 'react';

import { View, TextInput, Image, StyleSheet, Text } from 'react-native';
import Title from '../../components/Title/index';

import styles from './styles';
// import { Container } from './styles';

export default function HomeHeader() {
    return(
       <View style={styles.container}>
           <Text style={styles.title}>Explore</Text>
       </View>
    );
}
