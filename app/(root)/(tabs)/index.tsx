import { logout } from "@/lib/appwrite";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 justify-center items-center"
    >
      <Text className="text-white font-bold">Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/sign-in"}>
        <Text> SignIn</Text>
      </Link>
      <TouchableOpacity onPress={logout}> 
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
