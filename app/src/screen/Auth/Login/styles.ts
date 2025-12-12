import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#f9fcf6',
  },
  avoidingView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', 
    paddingHorizontal: 20, 
    paddingVertical: 20,
    gap: 5,
  },
  title:{
    fontFamily: 'Inter-BoldI',
    fontSize: 24,
    textAlign:'center',
  },
  bottomContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  loginBtn:{
    padding:12,
    textAlign:'center',
  },
  textBtn:{
    fontWeight: '400',
    fontSize:16,
    color:'#000',
  },
  inputSection: {
    gap: 15,
  },
  buttonSection: {
    marginTop: 20,
  },
  inputContainet:{
    borderWidth:1,
    borderRadius:16,
    marginVertical:3,
    backgroundColor:'#f9fcf6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem:'center',
  },
  activePasswordBtn:{
    height:15,
    width:15,
    backgroundColor: '#000', 
  },
  disablePasswordBtn:{
    height:15,
    width:15,
    backgroundColor: '#fff', 
  },
  inputError:{ 
    borderColor: '#9d0000',
    borderWidth: 1,
  },
  Btn:{
    borderWidth:1,
    borderRadius:100,
    marginVertical:10,
    paddingVertical:12,
    backgroundColor:'#c5e1a5',
  },
  textBtnEnd:{
    fontSize:16,
    fontWeight: '500',
    textAlign:'center',
    color: '#000',
  },
  errorText:{
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#9d0000',
    marginTop: 4,
    height: 18, 
  },
});
