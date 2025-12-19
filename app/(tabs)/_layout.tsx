import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, Text } from 'react-native'

const TabIcon = () => {
	return (
		<ImageBackground
			source={images.highlight}
			className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center 
							  items-center rounded-full overflow-hidden'
		>
			<Image source={icons.home} tintColor={"#151312"} className='size-5' />
			<Text
				className='text-secondary text-base font-semibold'
			>Home</Text>
		</ImageBackground>
	)
}

const _Layout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Home',
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon />
					)
				}}
			/>

			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					headerShown: false
				}}
			/>
		</Tabs>
	)
}

export default _Layout
