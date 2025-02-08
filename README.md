# React Native FlatList Unexpected Data Clearing

This repository demonstrates a bug where a React Native FlatList component unexpectedly clears its data when a simulated network request fails. The issue occurs when the network request returns null or an empty array, which causes the FlatList to render an empty list. 

The bug is caused by the way that the component handles changes to its data prop. When the data prop is updated to null or an empty array, the component unmounts and then remounts, leading to the unexpected behavior.

The solution involves adding some error handling to the network request to gracefully handle cases where the request fails.

## Solution

The `bugSolution.js` file contains a solution to this problem. This solution adds error handling and prevents the FlatList from clearing its data.