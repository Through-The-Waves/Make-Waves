# Social Media App Template

A modern social media application template built with React Native. This template includes essential features like user authentication, feed, profile, notifications, and post creation.

## Features

- User authentication
- Feed with posts
- User profiles
- Create posts with images
- Notifications
- Modern UI/UX design
- Bottom tab navigation

## Prerequisites

- Node.js (v14 or newer)
- npm or yarn
- React Native development environment set up
- iOS Simulator (for Mac) or Android Emulator

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd social-media-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install iOS dependencies (iOS only):
```bash
cd ios
pod install
cd ..
```

## Running the App

### iOS
```bash
npm run ios
# or
yarn ios
```

### Android
```bash
npm run android
# or
yarn android
```

## Project Structure

```
src/
  ├── screens/          # Screen components
  │   ├── HomeScreen.tsx
  │   ├── ProfileScreen.tsx
  │   ├── CreatePostScreen.tsx
  │   ├── NotificationsScreen.tsx
  │   └── LoginScreen.tsx
  ├── components/       # Reusable components
  ├── navigation/       # Navigation configuration
  └── assets/          # Images, fonts, etc.
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 