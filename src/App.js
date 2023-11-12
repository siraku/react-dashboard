import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Sidebar } from "./conmponents";
import "./App.css";

const App = () => {
  const activeMenu = true;
  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: "blue", borderRadius: "50%" }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg"> Sidebar W-0</div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            Navbar
          </div>
        </div>

        <div>
          <Routes>
            <Route path="/" element="ECormmerce" />
            <Route path="/ecommerce" element="ECormmerce" />

            {/* pages */}
            <Route path="/orders" element="Orders" />
            <Route path="/employees" element="Employees" />
            <Route path="/customers" element="Customers" />

            {/* Apps */}
            <Route path="/kanban" element="Kanban" />
            <Route path="/editor" element="Editor" />
            <Route path="/calendar" element="Calendar" />
            <Route path="/color-picker" element="ColorPicker" />

            {/* charts */}
            <Route path="/chart-line" element="Line" />
            <Route path="/chart-area" element="Area" />
            <Route path="/chart-bar" element="Bar" />
            <Route path="/chart-pie" element="Pie" />
            <Route path="/chart-financial" element="Financial" />
            <Route path="/chart-color-mapping" element="ColorMapping" />
            <Route path="/chart-pyramid" element="Pyramid" />
            <Route path="/chart-stacked" element="Stacked" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
