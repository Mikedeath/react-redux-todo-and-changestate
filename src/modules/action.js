// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    CHANGE_CODE_NAME:"CHANGE_CODE_NAME"
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });

  const changeCodeName=code=>({
    type: Types.CHANGE_CODE_NAME,
    payload: code
  })
  
  export default {
    createItem,
    deleteItem,
    changeCodeName,
    Types
  };