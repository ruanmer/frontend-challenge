import PropTypes from "prop-types";
import React, { createContext, useMemo, useCallback, useState } from "react";

export const StoreContext = createContext({});

const StoreProvider = (props) => {
  const { children } = props;
  const [data, setData] = useState({});

  const add = useCallback((newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  }, []);

  const contextValue = useMemo(
    () => ({
      data,
      add,
    }),
    [data],
  );

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreProvider;
