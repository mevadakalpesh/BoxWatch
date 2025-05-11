import React, { useEffect } from "react";
import AppNavigation from "@navigation/AppNavigation";
import RNBootSplash from "react-native-bootsplash";

export default function App() {
  useEffect(() => {
    const init = async () => {
      // Simulate some async startup tasks here (e.g., load app data)
      // await doSomething();
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash hidden");
    });
  }, []);

  return <AppNavigation />;
}
