import {StyleSheet} from 'react-native';
export default  styles = StyleSheet.create({
   topbar_bg: {
    height: 48,
    backgroundColor: '#2bb4f7',
    flexDirection: 'row'
  },
  topbar_left_item: {
    width: 48,
    height: 48,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  topbar_center_bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topbar_center_tv: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  topbar_right_item: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topbar_right_tv: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center'
  }
});