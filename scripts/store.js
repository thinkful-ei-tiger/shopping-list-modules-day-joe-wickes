import item from './item.js';

const store = {
  items: [],
  hideCheckedItems: false,
  test: function(something) {
    return something + '!!!!';
  },
  findById: function(id) {
    return this.items.filter((item) => item.id === id);
  },
  addItem: function(name) {
    try {
      item.validateName(name);
      const created = item.create(name);
      items.push(created);
    } catch (error) {
      console.log(`addItem -> ${error.message}`);
    }
  },
  findAndToggleChecked: function(id) {
    const itemObj = this.findById(id)[0];
    const index = this.items.indexOf(itemObj);
    if (itemObj.checked === false) {
      this.items[index].checked = true;
    } else if (itemObj.checked) {
      this.items[index].checked = false;
    }
  },
  findAndUpdateName: function(id, newName) {
    try {
      item.validateName(newName);
      const foundItem =  this.findById(id);
      console.log(foundItem);
      foundItem[0].name = newName;
    } catch (error) {
      console.log('Find and update name error');
    }
  },
  findAndDelete: function(id) {
    const foundId = this.findById(id)[0].id;
    this.items = this.items.filter((item) => item.id !== foundId);
  },
  toggleCheckedFilter: function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  },
};

const items = store.items;
const hideCheckedItems = store.hideCheckedItems;
const findById = store.findById;
const findAndToggleChecked = store.findAndToggleChecked;
const addItem = store.addItem;
const findAndUpdateName = store.findAndUpdateName;
const findAndDelete = store.findAndDelete;
const toggleCheckedFilter = store.toggleCheckedFilter;




export default {
  items,
  hideCheckedItems,
  findById,
  findAndToggleChecked,
  addItem,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter,
};