function makeTask(data) {
  const defaultData = {
    completed: false,
    category: 'General',
    priority: 'normal',
  }
  const newData = {...defaultData, ...data}

return newData
}

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
  
// const newData = {
// completed: false,
//   category: "General",
//   priority: "Normal", 
//   ...data,
// }
//   return newData
// }