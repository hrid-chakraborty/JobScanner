import { Stack,useRouter } from 'expo-router';
import { useState } from 'react';
import { View,ScrollView,SafeAreaView, Platform, StatusBar } from 'react-native';
import { COLORS, SIZES } from '../constants';
import { JobListing, Nearbyjobs, Welcome } from '../components';

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite, paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}>
            <Stack.Screen options={{
                headerShown: false,
            }}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    padding: SIZES.medium,
                }}>
                    <Welcome 
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={()=>{
                            if(searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />

                    <JobListing />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;