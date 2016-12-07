export default function (configure, callback) {
  const initialState = {'kate' : true, 'irena': false}; // Add here you initalStore value
  const store = configure(initialState);
  callback(store);
}
