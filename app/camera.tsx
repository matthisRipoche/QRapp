import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';

function PermissionsPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>You need to grant camera permissions to continue.</Text>
    </SafeAreaView>
  );
}

function NoCameraDeviceError() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>No camera device found on this device.</Text>
    </SafeAreaView>
  );
}

export default function DetailsScreen() {
  const device = useCameraDevice('back');  // Get the back camera device
  const { hasPermission } = useCameraPermission();  // Check for camera permission

  // If no permission, show permissions page
  if (!hasPermission) return <PermissionsPage />;

  // If no camera device, show error page
  if (device == null) return <NoCameraDeviceError />;

  // Return the camera view if permission and device are available
  return (
    <SafeAreaView style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFillObject}  // Fill the entire screen
        device={device}  // Set the camera device
        isActive={true}  // Ensure the camera is active
      />
      <Link href="/some-other-screen" style={styles.link}>Go to another screen</Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    position: 'absolute',
    top: 30,
    left: 30,
    color: 'darkred',
  },
});
