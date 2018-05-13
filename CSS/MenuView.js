import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
  menu_container: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  header: {
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 0,
  },
  icon: {
    color: '#FF9052',
  },
  search: {
    color: '#8190a5',
  },
  coffeeNameUnderline: {
    borderBottomColor: '#FF9052',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: '10%',
  },
  menu: {
    color: '#47525E',
    fontSize: 30,
    //left: '5%',
  },
  box: {
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    width: '50%',
  },

  back: {
    flex: 12,
    flexDirection: 'row',
  },

  image: {
    width: 140,
    height: 140,
    top: '15%',
    borderRadius: 70,
    transform: [
    {scaleX: 1}
    ]
  },
  list: {
    //bottom: 140,
  },
  item: {
    width: '100%',
    height: 140,
  },
  text: {
    color: '#ff9052',
    fontSize: 20,
    paddingTop: '2%',
    paddingBottom: '2%',
    top: '15%',
  },
});
