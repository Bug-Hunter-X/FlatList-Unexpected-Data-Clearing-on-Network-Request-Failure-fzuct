```javascript
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const DATA = Array.from({ length: 100 }, (_, i) => ({ id: i, value: `Item ${i}` }));

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        if (Math.random() < 0.5) {
          throw new Error('Network request failed');
        }
        setData(DATA);
      } catch (e) {
        setError('Network request failed');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => <Text style={styles.item}>{item.value}</Text>;

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default MyComponent;
```