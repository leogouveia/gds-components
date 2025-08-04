# @leogouveia/gds-library

<div align="center">
  <h1>🎨 GDS Design System</h1>
  <p><strong>Beautiful, accessible, and customizable React Native components built with Tamagui</strong></p>

[![npm version](https://badge.fury.io/js/@leogouveia%2Fgds-library.svg)](https://badge.fury.io/js/@leogouveia%2Fgds-library)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org)
[![React Native](https://img.shields.io/badge/React%20Native-Compatible-green.svg)](https://reactnative.dev)
[![Tamagui](https://img.shields.io/badge/Built%20with-Tamagui-purple.svg)](https://tamagui.dev)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

</div>

---

## ✨ Features

- 🎯 **Modern Design** - Clean, professional components
- 📱 **Cross-Platform** - Works on iOS, Android, and Web
- 🎨 **Customizable** - Built with Tamagui's powerful styling system
- 📦 **TypeScript First** - Full type safety out of the box
- ⚡ **Performance** - Optimized for React Native performance
- 🌓 **Theme Ready** - Built-in light/dark theme support
- ♿ **Accessible** - Following accessibility best practices

## 🚀 Installation

```bash
# npm
npm install @leogouveia/gds-library

# yarn
yarn add @leogouveia/gds-library

# pnpm
pnpm add @leogouveia/gds-library
```

### Peer Dependencies

Make sure you have the required peer dependencies installed:

```bash
npm install react react-native
```

## 📖 Quick Start

### 1. Setup Provider

Wrap your app with the `TamaguiProvider`:

```tsx
import React from 'react';
import { TamaguiProvider } from '@leogouveia/gds-library';

export default function App() {
  return <TamaguiProvider>{/* Your app content */}</TamaguiProvider>;
}
```

### 2. Use Components

Import and use components in your screens:

```tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from '@leogouveia/gds-library';

export default function MyScreen() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your name"
        value={text}
        onChangeText={setText}
      />
      <Button onPress={() => alert(`Hello, ${text}!`)}>Say Hello</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 16,
    justifyContent: 'center',
  },
});
```

## 🧩 Available Components

### Button

A customizable button component with multiple variants and sizes.

```tsx
import { Button } from '@leogouveia/gds-library';

<Button onPress={handlePress}>Primary Button</Button>
<Button variant="secondary" onPress={handlePress}>Secondary</Button>
<Button size="small" onPress={handlePress}>Small Button</Button>
```

### Input

A text input component with built-in styling and validation support.

```tsx
import { Input } from '@leogouveia/gds-library';

<Input placeholder="Enter text" value={value} onChangeText={setValue} />;
```

### TamaguiProvider

The required provider component that enables theming and styling.

```tsx
import { TamaguiProvider } from '@leogouveia/gds-library';

<TamaguiProvider>
  <YourApp />
</TamaguiProvider>;
```

## 🎨 Theming

The components are built with Tamagui and support extensive theming capabilities:

```tsx
import { TamaguiProvider } from '@leogouveia/gds-library';

// Custom theme configuration coming soon!
<TamaguiProvider>
  <App />
</TamaguiProvider>;
```

## 📱 Platform Support

- ✅ **iOS** - Full support
- ✅ **Android** - Full support
- ✅ **Web** - Full support via React Native Web
- ✅ **Expo** - Compatible with Expo managed workflow

## 🛠️ Development

This library is built with:

- [React Native](https://reactnative.dev) - Mobile framework
- [Tamagui](https://tamagui.dev) - Styling and theming
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [React Native Builder Bob](https://github.com/callstack/react-native-builder-bob) - Build system

## 📄 License

ISC © [Leonardo de Albuquerque Gouveia](https://github.com/leogouveia)

---

<div align="center">
  <p>Made with ❤️ for the React Native community</p>

**[Documentation](https://github.com/leogouveia/gds-components) • [Issues](https://github.com/leogouveia/gds-components/issues) • [Contributing](https://github.com/leogouveia/gds-components/blob/main/CONTRIBUTING.md)**

</div>
