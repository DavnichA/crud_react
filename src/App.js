import React from 'react';
import './App.css';
import { connect } from 'react-redux';

//component
import CrudContainer from './components/CrudContainer';

//actions
import { setData, delData, changeData, updateData } from './store/crudReducer';

function App(props) {
  return (
    <CrudContainer
      setData={props.setData}
      data={props.data}
      delData={props.delData}
      changeData={props.changeData}
      status={props.status}
      index={props.index}
      updateData={props.updateData} />
  );
}


let mapStateToProps = (state) => {
  return {
    data: state.crud.data,
    status: state.crud.status,
    index: state.crud.index
  }
}

export default connect(mapStateToProps, {
  setData, delData, changeData, updateData
})(App);

