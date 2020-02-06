import React from "react"
import { StyleSheet, Text, View } from "react-native"
import {
  Button,
  ApplicationProvider,
  IconRegistry
} from "@ui-kitten/components"
import { mapping, light as lightTheme } from "@eva-design/eva"
import { Icon } from "@ui-kitten/components"
import { EvaIconsPack } from "@ui-kitten/eva-icons"
export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <Button>Foo</Button>
          <Icon name="star" width={32} height={32} />
        </View>
      </ApplicationProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
