/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Header from '../scr/components/Header';
 import { expect } from '@jest/globals';
 import renderer from 'react-test-renderer';
 
 it('matches snapshot', () => {
   const tree = renderer.create(<Header />).toJSON();
   expect(tree).toMatchSnapshot();
 });
 