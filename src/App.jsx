import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptedPetContext from "./context/AdoptedPetContext";
import Details from "./pages/Details";
import SearchParams from "./pages/SearchParams";

import logoImage from "./assets/image-logo.png";
import Form from "./pages/Form";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <div
      className="m-0 p-0   bg-repeat"
      style={{
        background: "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
      }}
    >
      <BrowserRouter>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <QueryClientProvider client={queryClient}>
            <header className="w-full mb-10  p-7 flex justify-center items-center brightness-150">
              <Link to="/">
                <img src={logoImage} alt="Adopt Me!" />
              </Link>
            </header>
            <Routes>
              <Route path="/" element={<SearchParams />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </QueryClientProvider>
        </AdoptedPetContext.Provider>
      </BrowserRouter>
      <div className="w-full h-11"></div>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
