const homedata = (state = {
  list1: [],
  list2: []
}, {type, data}) => {
  if( type === ''){
    state.list1 = data
  }

  return state
}

export default homedata