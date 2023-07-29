import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
        <Text
          style={{
            fontSize: wp(10),
          }}
          className="text-center text-gray-700 font-bold">
          Toolbox Ai
        </Text>
        <Text
          style={{
            fontSize: wp(4),
          }}
          className="text-center tracking-wider text-gray-500 font-semibold">
          El futuro de la inteligencia artificial
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require('../../assets/images/welcome.png')}
          style={{
            width: wp(75),
            height: wp(75),
          }}
        />
      </View>
      <TouchableOpacity
        className="bg-emerald-600 mx-5 p-4 rounded-2xl"
        onPress={() => navigation.navigate('home')}>
        <Text
          style={{
            fontSize: wp(6),
          }}
          className="text-center text-2xl text-white font-bold">
          Empezar
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
