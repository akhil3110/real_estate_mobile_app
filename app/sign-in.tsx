import icons from '@/constants/icons'
import images from '@/constants/images'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'
import React from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const SignIn = () => {

  const {refetch, loading, isLoggedIn} = useGlobalContext()

  if(!loading && isLoggedIn) {
     return <Redirect href={"/"} />
  }

  
  const handleLogin = async() => {
    const result =  await login()

    if(result){
      refetch()
      console.log("Login Succesful")
    } else {
      Alert.alert('Error', "Failed To Login")
    }
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className='w-full h-4/6' resizeMode="contain" />

        <View className='px-10'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to Restate</Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
            Let's Get You Closer to {"\n"}
            <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>

          <Text className='text-lg font-rubik text-black-200 text-center mt-12'>Login to Restae with Google</Text>

          <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full py-4 w-full mt-5'>
            <View className='flex justify-center items-center flex-row'>
              <Image source={icons.google} className='w-5 h-5' resizeMode="contain" />
              <Text className='text-lg font-rubik-medium text-black-300 ml-2'> Continue with Goolge</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn