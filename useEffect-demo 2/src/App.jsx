import { useEffect, useState } from 'react'
import AddItem from './components/AddItem'
import ViewItem from './components/ViewItem';
import './App.css'

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [showError, setShowError] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState(0);

  useEffect(() => {

    const fetchData = async () => {
      try {
        if (localStorage.getItem("items")) {
          console.log("Data loaded from local storage.");
          setItems(JSON.parse(localStorage.getItem("items")));
        } else {
          console.log("Fetching data from the API...");
          const response = await fetch("https://jsonplaceholder.typicode.com/albums");
          const data = await response.json();
          setItems(data);
          localStorage.setItem("items", JSON.stringify(data));
          console.log("Data fetched from the API and stored in local storage.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
  
    fetchData();
  }, [])

  const addItem = (title) => {
    if (isUpdate) {
      // iss update an item
      const updatedItems = items.map((item) =>
        item.id === idToUpdate ? { ...item, title } : item
      );
      setItems(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
      setIsUpdate(false);
    } else {
      // iss add a new item
      const lastItem = items[items.length - 1];
      const id = lastItem ? lastItem.id + 1 : 1;
      const userId = lastItem ? lastItem.userId + 1 : 1;
      const newItem = { userId, id, checked: false, title };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      localStorage.setItem("items", JSON.stringify(updatedItems));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    setNewItem("");
    setShowError(false);
    addItem(newItem);
    setNewItem("");
  };

  const handleDelete = (id) => {
    // iss delete an item
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("items", JSON.stringify(updatedItems));
  };

  const handleUpdate = (id) => {
    // iss update an item
    const searchItem = items.find((item) => item.id === id);
    setNewItem(searchItem.title);
    setIsUpdate(true);
    setIdToUpdate(id);
  };

  return (
    <div className="App">
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <br />
      {items.map((item) => (
        <ViewItem
          key={item.id}
          item={item}
          id={item.id}
          title={item.title}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
      
    </div>
  );
}

export default App
