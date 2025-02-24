import { useState } from "react";
import SildeProduct from "./SildeProduct";

const TabsCategory = () => {
  const tabs = [
    { id: 1, name: "Category 1", content: SildeProduct },
    { id: 2, name: "Category 2", content: SildeProduct },
    { id: 3, name: "Category 3", content: SildeProduct },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full">
      {/* Tabs Header */}
      <div className="grid grid-cols-3 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-3 text-center text-black font-medium transition-all ${activeTab === tab.id ? "bg-tabs rounded-t-lg text-white" : "bg-[#eaedf1] hover:bg-gray-200"}`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-4 bg-tabs rounded-b-lg">
        {/* {tabs.map((tab: any) => (activeTab === tab.id ? <div key={tab.id}>{tab.content}</div> : null))} */}
        <SildeProduct />
      </div>
    </div>
  );
};

export default TabsCategory;
