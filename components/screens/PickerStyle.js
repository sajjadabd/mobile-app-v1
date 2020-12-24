import React from 'react'

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Icon from 'react-native-vector-icons/FontAwesome5';

// import RNPickerSelect from 'react-native-picker-select';

export const pickerStyle = {
	fontSize: 30,
	fontFamily : 'Lalezar-Regular',
	inputIOS: {
		color: 'black',
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
		fontSize: 30,
		fontFamily : 'Lalezar-Regular',
	},
	inputAndroid: {
		color: 'black',
		fontSize: 30,
		fontFamily : 'Lalezar-Regular',
	},
  	placeholderColor: 'black',
	underline: { borderTopWidth: 0 },
	icon: {
		position: 'absolute',
		backgroundColor: 'transparent',
		borderTopWidth: 5,
		borderTopColor: '#00000099',
		borderRightWidth: 5,
		borderRightColor: 'transparent',
		borderLeftWidth: 5,
    borderLeftColor: 'transparent',
		width: 0,
		height: 0,
		top: 20,
		right: 15,
	},
};

export const DropDown = () => {
  return (
      <RNPickerSelect
          style={pickerStyle}
          onValueChange={(value) => console.log(value)}
          items={[
              { label: 'مازندران', value: 'مازندران' },
              { label: 'تهران', value: 'تهران' },
              { label: 'اصفهان', value: 'اصفهان' },
          ]}
      />
  );
};




