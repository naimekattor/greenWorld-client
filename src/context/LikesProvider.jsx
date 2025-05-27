import { createContext, useState } from "react";

export const likeContext = createContext();
const LikeProvider = ({ children }) => {
  const [initialValue, setInitialValue] = useState(0)
  const handleLikesUpdate = () => {
    setInitialValue(prev => prev + 1)
  }
  const info = {
    handleLikesUpdate,
    initialValue
  }
  return <likeContext.Provider value={info}>{children}</likeContext.Provider>
}
export default LikeProvider;