import { productActionTypes } from "./product.actionTypes";

const INITIAL_STATE = {
  items: [
    {
      name: "product1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: 12,
      quantity: 23,
      image:
        "https://m.media-amazon.com/images/G/31/img20/Wireless/Apple/iPhone12/RiverImages/PC/IN_r1308-r1309_Marketing_Page_L_FFH-1500_01._CB419225211_.jpg",
      id: 1,
    },
    {
      name: "product2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: 10,
      quantity: 24,
      image: "https://www.scottbrady91.com/img/logos/apple.png",
      id: 2,
    },
    {
      name: "product3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: 20,
      quantity: 21,
      image: "https://www.scottbrady91.com/img/logos/apple.png",
      id: 3,
    },
    {
      name: "product4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      price: 22,
      quantity: 15,
      image:
        "https://m.media-amazon.com/images/G/31/img20/Wireless/Apple/iPhone12/RiverImages/PC/IN_r1308-r1309_Marketing_Page_L_FFH-1500_01._CB419225211_.jpg",
      id: 4,
    },
  ],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productActionTypes.ADD_PRODUCT:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case productActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload)],
      };
    case productActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        items: [
          ...state.items.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
        ],
      };

    default:
      return state;
  }
};

export default userReducer;
