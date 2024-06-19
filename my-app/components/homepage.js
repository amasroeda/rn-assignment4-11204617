import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TextInput, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';

const featuredJobs = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Facebook',
    salary: '$180,000',
    location: 'Accra, Ghana',
    image: '../assets/facebook.png',
  },
  {
    id: '2',
    title: 'Data Scientist',
    company: 'Google',
    salary: '$160,000',
    location: 'Mountain View, CA',
    image: '../assets/google.png',
  },
];

const popularJobs = [
  {
    id: '1',
    title: 'Jr Executive',
    company: 'Burger King',
    salary: '$96,000/y',
    location: 'Los Angeles, US',
    image: '../assets/burger king.png',
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Beats',
    salary: '$84,000/y',
    location: 'Florida, US',
    image: '../assets/beats.png',
  },
  {
    id: '3',
    title: 'Product Manager',
    company: 'Facebook',
    salary: '$86,000/y',
    location: 'Florida, US',
    image: 'https://via.placeholder.com/40',
  },
];

export default function Homepage() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>

        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Eric Atsu</Text>
            <Text style={styles.userEmail}>eric@gmail.com</Text>
          </View>
          <Image source={require('../assets/eric.png')} style={styles.profilePic} />
        </View>

        <View style={styles.searchContainer}>
            <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search a job or position"
            />
            <Image source={require('../assets/search.png')} style={styles.searchPic} />
            </View>
            <Image source={require('../assets/set.png')} style={styles.searchPic} />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={featuredJobs}
          horizontal
          renderItem={({ item }) => (
            <View style={styles.featuredJob}>
              <View style={styles.jobIconContainer}>
                <Image source={{ uri: item.image }} style={styles.jobIcon} />
              </View>
              <View style={styles.jobInfo}>
                <Text style={styles.jobTitle}>{item.title}</Text>
                <Text style={styles.jobCompany}>{item.company}</Text>
                <Text style={styles.jobSalary}>{item.salary}</Text>
                <Text style={styles.jobLocation}>{item.location}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredJobsContainer}
        />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        {popularJobs.map((job) => (
          <View key={job.id} style={styles.popularJob}>
            <Image source={{ uri: job.image }} style={styles.jobIcon} />
            <View style={styles.jobInfo}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobCompany}>{job.company}</Text>
              <Text style={styles.jobSalary}>{job.salary}</Text>
              <Text style={styles.jobLocation}>{job.location}</Text>
            </View>
          </View>

        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#6c757d',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#007bff',
  },
  featuredJobsContainer: {
    paddingBottom: 20,
  },
  featuredJob: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  jobIconContainer: {
    marginRight: 15,
  },
  jobIcon: {
    width: 40,
    height: 40,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  jobCompany: {
    fontSize: 14,
    color: '#dfe6f3',
  },
  jobSalary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  jobLocation: {
    fontSize: 14,
    color: '#dfe6f3',
  },
  popularJob: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 1,
  },
});
