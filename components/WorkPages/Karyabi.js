import React from 'react'

import { View , StyleSheet } from 'react-native'

import WorkCard from '../utils/WorkCard';

import LinearGradient from 'react-native-linear-gradient';


const numbers = [
  {
    name : 'محمد اکبری',
    main_skill : 'جوشکاری',
    city : 'ساری',
    image : 'https://randomuser.me/api/portraits/men/20.jpg'
  },
  {
    name : 'مرتضی علوی',
    main_skill : 'کامپیوتر',
    city : 'نکا',
    image : 'https://randomuser.me/api/portraits/men/43.jpg'
  },
  {
    name : 'پیمان احسانی',
    main_skill : 'فلزکاری',
    city : 'بهشهر',
    image : 'https://randomuser.me/api/portraits/men/11.jpg'
  },
  {
    name : 'نگار آشکاران',
    main_skill : 'خیاطی',
    city : 'نکا',
    image : 'https://randomuser.me/api/portraits/women/64.jpg'
  },
  {
    name : 'ستاره یعقوبی',
    main_skill : 'آرایشگری',
    city : 'بابل',
    image : 'https://randomuser.me/api/portraits/women/57.jpg'
  },
  {
    name : 'هادی امامی',
    main_skill : 'برق کاری',
    city : 'بابلسر',
    image : 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name : 'مریم گرجی',
    main_skill : 'آشپزی',
    city : 'چالوس',
    image : 'https://randomuser.me/api/portraits/women/68.jpg'
  },
  {
    name : 'نسترن عقیلی',
    main_skill : 'خراطی',
    city : 'رامسر',
    image : 'https://randomuser.me/api/portraits/women/0.jpg'
  },
  {
    name : 'صابر دوستدار',
    main_skill : 'صافکاری',
    city : 'بهشهر',
    image : 'https://randomuser.me/api/portraits/men/81.jpg'
  },

  
];

const Karyabi = () => {
  return (
    <>
      <View style={styles.scrollContent}>
        {
          numbers.map( (item , index) => {
            return (
              <WorkCard key={index} item={item} />
            )
          })
        }
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  scrollContent : {
    paddingTop : 20,
  }
});

export default Karyabi
