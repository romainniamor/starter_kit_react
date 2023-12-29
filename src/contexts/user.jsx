import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isAuthenticated: false,
    id: null,
    name: null,
    access: null,
    refresh: null,
  });

useEffect(() => {
    console.log('init user state')
    const access = localStorage.getItem("user.access");
    const refresh = localStorage.getItem("user.refresh");
    const id = localStorage.getItem("user.id");
    const name = localStorage.getItem("user.name");

    if (access) {
        setUser(prevState => ({
            ...prevState,
            access: access,
            refresh: refresh,
            id: id,
            name: name,
            isAuthenticated: true,
        }));

        refreshToken();
    }
}, []);


  const setToken = (data) => {
    setUser({
      ...user,
      access: data.access,
      refresh: data.refresh,
      isAuthenticated: true,
    });

    localStorage.setItem("user.id", data.id);
    localStorage.setItem("user.name", data.name);
    localStorage.setItem("user.access", data.access);
    localStorage.setItem("user.refresh", data.refresh);
    
  };

   const removeToken = () {
      console.log("removeToken");
       setUser({
        isAuthenticated: false,
        id: null,
        name: null,
        access: null,
        refresh: null,
    });
        // remove data from local storage
      localStorage.setItem("user.access", "");
      localStorage.setItem("user.refresh", "");
      localStorage.setItem("user.id", "");
      localStorage.setItem("user.name", "");

    },

   const refreshToken = () => {
    console.log("refresh token");
    const refresh = user.refresh; // Assurez-vous que 'refresh' est disponible dans votre état

    fetch("/api/refresh/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refresh: refresh }),
    })
    .then(response => response.json())
    .then(data => {
        setUser(prevState => ({
            ...prevState,
            access: data.access,
        }));

        localStorage.setItem("user.access", data.access);

        // Mettre à jour l'en-tête d'autorisation pour les requêtes futures
        updateAuthorizationHeader(data.access);

        // Vous pouvez également mettre à jour l'en-tête d'autorisation par défaut ici, si nécessaire
    })
    .catch(error => {
        console.log(error);
        removeToken(); // Assurez-vous que removeToken est défini
    });

    const updateAuthorizationHeader = (accessToken) => {
    // Mettez à jour l'en-tête d'autorisation pour vos futures requêtes ici
    // Cela dépend de la façon dont vous gérez les requêtes dans votre application
};
};




  return (
    <UserContext.Provider value={{ user, setUser /*, autres fonctions ici */ }}>
      {children}
    </UserContext.Provider>
  );
};
