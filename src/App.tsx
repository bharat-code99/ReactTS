import Dropdown from "./components/Dropdown";

type MenuItem = {
  label: string;
  value: string;
}

const App = () => {
  const menuItems = [
    { label: "Profile", value: "profile" },
    { label: "Settings", value: "settings" },
    { label: "Logout", value: "logout" },
  ];

  const handleSelect = (item: MenuItem) => {
    console.log("Selected:", item.value);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <Dropdown label="Menu" items={menuItems} onSelect={handleSelect} />
    </div>
  );
};

export default App;