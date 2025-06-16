import { uiActions } from "./ui-slice";

export const sendCartData = (cart) => {
  // 1. Show pending
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data...",
      })
    );
// 2. Send request function
    const sendRequest = async () => {
      const response = await fetch(
        "https://learning-redux-react-default-rtdb.firebaseio.com/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      if (!response.ok) {
        throw new Error("Failed to send cart data");
      }
    }
    // 3. Try to send the data
    try {
        await sendRequest();
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success...",
            message: "Cart data sent successfully!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Failed to send cart data!",
          })
        );
      }
  };
};
