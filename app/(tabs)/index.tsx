import SearchBar from "@/components/searchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React from 'react';
import { ActivityIndicator, FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Init() {
	const router = useRouter();

	const {
		data: movies,
		loading: movieLoading,
		error: moviesError
	} = useFetch(() => fetchMovies({ query: '' }))

	return (
		<View className="flex-1 bg-primary">
			<Image source={images.bg} className="absolute w-full z-0" />
			<ScrollView
				className="flex-1 px-5"
				// showsVerticalScrollIndicator={false}
				// contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
			>
				<Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

				{movieLoading ? (
					<ActivityIndicator
						size="large"
						color="#0000ff"
						className="mt-10 self-center"
					/>
				) : moviesError ? (
					<Text className="text-white text-sm">Error: {moviesError?.message} </Text>
				) : (
					<View className="flex-1 mt-5">
						<SearchBar
							onPress={() => { router.push("/search") }}
							placeholder="Search for movies"
						/>

						<>
							<Text className="text-lg text-white font-bold mt-5 mb-3">
								Latest Movies</Text>

							<FlatList
								data={movies}
								renderItem={({item}) => (
									<Text className="text-white text-sm">{item.title}</Text>
								)}
								className="mt-2 pb-32"
                				scrollEnabled={false}
							/>
						</>
					</View>
				) 
				}
			</ScrollView>
		</View>
	);
}
