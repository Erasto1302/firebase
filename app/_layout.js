import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title: "Firebase"}} />
      <Stack.Screen name="firebase" options={{title: "Firebase"}} />
      
    </Stack>
  );
}
