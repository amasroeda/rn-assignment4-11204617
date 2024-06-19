import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TextInput, StyleSheet, FlatList, StatusBar, TouchableOpacity } from 'react-native';

const featuredJobs = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Facebook',
    salary: '$180,000',
    location: 'Accra, Ghana',
    image: require('../assets/facebook.png'),
  },
  {
    id: '2',
    title: 'Data Scientist',
    company: 'Google',
    salary: '$160,000',
    location: 'Mountain View, CA',
    image: require('../assets/google.png'),
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
      <View style={styles.padding}>
        <View style={styles.header}>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Eric Atsu</Text>
              <Text style={styles.userEmail}>eric@gmail.com</Text>
            </View>
            <Image source={require('../assets/eric.png')} style={styles.profilePic} />
          </View>

          <View style={styles.searchContainer}>
              <View style={styles.searchBar}>
              <Image source={require('../assets/search.png')} style={styles.searchPic} />
              <TextInput
                  style={styles.searchInput}
                  placeholder="Search a job or position"
              />
              </View>
              <Image source={require('../assets/set.png')} style={styles.setPic} />
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Jobs</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
      </View>
        

        <FlatList
          data={featuredJobs}
          horizontal
          renderItem={({ item }) => (

            <View style={styles.featuredJob}>
              <View style={styles.jobIconContainer}>
                <Image source={{ uri: item.image }} style={styles.jobIcon} />
                <View style={styles.jobInner}>
                    <Text style={styles.jobTitle}>{item.title}</Text>
                    <Text style={styles.jobCompany}>{item.company}</Text>
                </View>
              </View>

              <View style={styles.jobInfo}>
                <Text style={styles.jobSalary}>{item.salary}</Text>
                <Text style={styles.jobLocation}>{item.location}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredJobsContainer}
        />

        <View style={styles.padding}>
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

              <View style={styles.PopInfoRow}>
              <Text style={styles.PopTitle}>{job.title}</Text>
              <Text style={styles.PopCompany}>{job.company}</Text>
              </View>

              <View style={styles.PopInfoRow}>
              <Text style={styles.PopSalary}>{job.salary}</Text>
              <Text style={styles.Poplocation}>{job.location}</Text>
              </View>

            </View>
          </View>

        ))}
        </View>
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
  padding: {
  paddingHorizontal: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  profilePic: {
    width: 50,
    height: 50,
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
    marginBottom: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchPic: {
    width: 19,
    height: 19,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F2F2F3',
    alignItems: 'center',
    borderRadius: 10,
    paddingLeft: 12,
    paddingRight: 20,
    gap: 3,
  },
  searchInput: {
    backgroundColor: '#F2F2F3',
    padding: 10,
    borderRadius: 10,
    color: '#A1A2A9',
    fontSize: 16,
  },
  setPic: {
    width: 20,
    height: 20,
    backgroundColor: '#F2F2F3',
    padding: 23,
    borderRadius: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#A1A2A9',
  },
  featuredJobsContainer: {
    paddingBottom: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  featuredJob: {
    display: 'flex',
    gap: 50,
    backgroundColor: '#007bff',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 15,
  },
  jobIconContainer: {
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
  },
  jobIcon: {
    width: 40,
    height: 40,
  },
  jobInner: {
    display: 'flex',
    gap: 6,
  },
  jobInfo: {
    display: 'flex',
    flexDirection: 'row',
    gap: 40,
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
    color: '#fff',
    fontWeight: 'bold',
  },
  popularJob: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 25,
  },
  PopInfoRow:{
    gap: 8,
  },
  PopTitle:{
    fontWeight: '800',
  },
  PopCompany:{
    color: '#A1A2A9',
  },
  PopSalary:{
    fontWeight: '500',
  },
  Poplocation:{
    color: '#A1A2A9',
  },
});