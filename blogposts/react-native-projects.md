---
title: 'Learning React Native'
date: '2023-05-06'
---


### The goal

So recently I've embarked on some upskilling for work projects, specifically **React Native**, **Typescript** and **GraphQL**.



### Resources

To assist me I've made use of:
- Todoist for task management;
- ChatGPT for tasks like generating data quickly;
- Visual Studio Code extensions:
  - "nativeEmmet" for code snippets
  - "Github Copilot" for autocompletion of code, which actually has been trained on many public tutorials... check it out:
![github copilot in action](/images/copilot_demo.gif)
- Course: [React Native - The Practical Guide \[2023\]
](https://www.udemy.com/course/react-native-the-practical-guide/){width}


### Tutorial - [NFT Marketplace Course](https://youtu.be/_ivIUCSOZ78)

This was a basic react native app that gave exposure into basic UI/UX manipulation. One thing I enjoyed learning here was the way the presenter organised his assets, screens and layouts. His predefined COLORS, SHADOWS, FONTS and other assets really helped keep the code clean, making it a pleasure to build.

To try out the app, first download Expo Go here:

[Demo App](https://expo.dev/@sayfcodes/nft_marketplace?serviceType=classic&distribution=expo-go)
![NFT Marketplace gif](/images/nft_mktplace.gif)

  Core Components learned:
  - import {
      StatusBar,
      SafeAreaView,
      FlatList,
      View,
      Image,
      Text,
      TouchableOpacity,
      TextInput
    } from 'react-native'; <br />

  Hooks learned:
  - import { useIsFocused } from '@react-navigation/core'
  - import { useNavigation } from '@react-navigation/native';

  Others:
  - import { createStackNavigator } from '@react-navigation/stack';
  - import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
  - import { useFonts } from 'expo-font';

### Tutorial - [UPS 2.0](https://www.youtube.com/live/hvvWv2GLWss?feature=share)

The reason I chose this particular tutorial was because it used the tech stack that we would be adopting (Typescript and graphql). This involved setting up a Firebase db. How they set up the GraphQL queries via Stepzen was interesting, the result of which can be found in `stepzen/order/index.graphql` and `stepzen/trackingItems/index.graphql`:
![StepZen](/images/stepzen_terminal_commands.png)

There was some magic code involved with something called a `@materializer` that did some hand wavy association between models, and if all goes well with how you hook them up you get the following after running `stepzen start`:
![StepZen2](/images/stepzen_2.png)


  Core Components learned:

  Hooks learned:
  - import {useTailwind} from 'tailwind-rn';
  - import { gql, useQuery } from '@apollo/client';

  Navigation modules learned:
  - import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  - import { createNativeStackNavigator } from '@react-navigation/native-stack';
  - import { NavigationContainer } from '@react-navigation/native';


### ChatGPT results for React Native key learning objective

<!-- Section Title	Key Learning Objectives
Introduction to React Native	- Understand the basics of React Native and its architecture <br> - Understand the differences between React and React Native
Setting up your development environment	- Install and configure necessary tools for React Native development
Building user interfaces with React Native	- Create and style components <br> - Use Flexbox for layout <br> - Understand the component lifecycle
Managing state with React Native	- Work with state and props <br> - Use the useState and useEffect hooks <br> - Pass data between components
Navigation with React Native	- Use React Navigation to create navigation stacks, tabs, and drawers
Debugging and testing React Native apps	- Use the React Native debugger and Reactotron <br> - Write unit and integration tests <br> - Test with Expo
Using external APIs in React Native	- Make HTTP requests with Axios and Fetch <br> - Handle API responses <br> - Use asynchronous code with Promises and async/await
Working with different kinds of data in React Native	- Handle text input <br> - Use lists and FlatList <br> - Use images and camera
Adding animations to React Native apps	- Use the Animated API <br> - Create and animate components <br> - Use gesture responders
Push Notifications	- Implement push notifications using React Native Firebase <br> - Understand how to send push notifications to devices
Publishing your app	- Generate signed APKs for Android and IPA files for iOS <br> - Submit your app to the app stores <br> - Use OTA updates

Difficulty Level	Project Name	Features
Beginner	Tic Tac Toe	Build a simple tic tac toe game app, which includes the basics of creating a React Native app, handling user input, and updating the game state
Beginner	Weather App	Build a weather app that uses an API to fetch weather data based on a user's location, which includes building user interfaces, making network requests, and handling data
Intermediate	To-Do List	Build a to-do list app that includes functionality for adding, editing, and deleting tasks, which includes managing data with Redux, implementing navigation, and working with asynchronous storage
Intermediate	Instagram Clone	Build an Instagram clone app that includes features like posting images, adding captions, and liking posts, which includes integrating with a backend API, handling authentication, and managing complex data structures
Advanced	E-commerce App	Build an e-commerce app that includes features like browsing products, adding items to a shopping cart, and checking out, which includes integrating with a complex API, building custom animations, and handling complex user flows
Advanced	Video Streaming App	Build a video streaming app that includes features like streaming live and on-demand videos, managing user subscriptions, and handling payments, which includes working with advanced media APIs, integrating with third-party services, and handling complex user data -->

<!-- #### Heading 4

- Bullet

> A block quote.

* Some _emphasis_, **importance**, and `code`

[Test Link](https://google.com)

![Image](/images/syftr-profile-pic.png)

Horizontal rule:
*** -->

