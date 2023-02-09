import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AboutUs = () => {
  return (
    <ScrollView>
      <View>
        <View style={styles.header}>
          <Image source={require('../Assests/Images/imdb.png')} style={styles.imdb} />
          <Text style={styles.about}>
            About Us
          </Text>
        </View>
        <Text style={styles.data}>
          IMDb (an abbreviation of Internet Movie Database) [2]  is an online database of
          information related to films, television series, home videos, video games, and streaming content online
          – including cast, production crew and personal biographies, plot summaries, trivia, ratings, and fan and critical reviews.
          IMDb began as a fan-operated movie database on the Usenet group "rec.arts.movies" in 1990, and moved to the Web in 1993. Since 1998,
          it is now owned and operated by IMDb.com, Inc., a subsidiary of Amazon.
        </Text>
        <Text style={styles.data}>
          As of March 2022, the database contained some 10.1 million titles (including television episodes)
          and 11.5 million person records.[3] Additionally, the site had 83 million registered users.
          The site's message boards were disabled in February 2017.
        </Text>
        <View>
          <Text style={styles.rating}>
            User Rating of Films
          </Text>
          <Text style={styles.data}>
            As one adjunct to data, the IMDb offers a rating scale that allows users
            to rate films on a scale of one to ten.
          </Text>
          <Text style={styles.data}>
            IMDb indicates that submitted ratings are filtered
            and weighted in various ways to produce a weighted mean that is
            displayed for each film, series, and so on. It states that filters are used to avoid
            ballot stuffing; the method is not described in detail to avoid attempts to circumvent it.
            In fact, it sometimes produces an extreme difference between the weighted average and the arithmetic mean.
          </Text>
        </View>
        <View>
          <Text style={styles.rating}>
            IMDb Pro
          </Text>
          <Text style={styles.data}>
            Actors, crew, and industry executives can post their own resume and upload photos
            of themselves for a yearly membership fee to IMDbPro. IMDbPro can be accessed by
            anyone willing to pay the annual fee of US$149.99. Membership enables a user to access
            the rank order of each industry personality, as well as agent contact information for any actor,
            producer, director etc. that has an IMDb page. IMDbPro also allows existing actors to claim their name page.
            Enrolling in IMDbPro enables members who are industry personnel to upload a head shot to open their page,
            as well as to upload hundreds of photos to accompany their page. Anyone can register as an IMDb user and contribute
            to the site as well as view its content; however, those users enrolled in IMDbPro have greater access and privileges.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default AboutUs

const styles = StyleSheet.create({
  about: {
    alignSelf: 'center',
    marginTop: 15,
    fontSize: 35,
    color: 'black',
    fontWeight: '500',
    marginBottom: 12
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  data: {
    color: 'black',
    marginTop: 12,
    marginLeft: 10,
    marginRight: 10
  },
  imdb: {
    height: 90,
    width: 250,
    marginTop: 12,
    alignSelf: 'center',
    borderRadius: 20
  },
  rating: {
    marginTop: 15,
    fontSize: 23,
    color: 'black',
    fontWeight: '500',
    marginLeft: 10
  }
})