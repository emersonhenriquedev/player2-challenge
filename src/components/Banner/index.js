import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Carousel from 'pinar';

export default function Banner(props) {
  return (
    <View {...props}>
      <Carousel
        showsControls={false}
        height={115}
        mergeStyles={true}
        dotStyle={{marginBottom: '-8%'}}
        activeDotStyle={{backgroundColor: '#53B175', marginBottom: '-8%'}}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/banner.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/banner.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/banner.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </Carousel>
    </View>
  );
}
