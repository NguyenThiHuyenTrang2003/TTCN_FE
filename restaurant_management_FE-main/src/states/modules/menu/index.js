import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    menus: [],
    isLoadingListMenu: false,
    paginationListMenu: {
      currentPage: 1,
      perPage: 10,
      totalPage: 1,
      totalRecord: 0,
    },

    visibleModalCreateOrUpdateMenu: false,
    isLoadingBtnCreateOrUpdateMenu: false,
    errorCreateOrUpdateMenu: {
      name: "",
    },
  },
  reducers: {
    
    setErrorCreateOrUpdateMenu: (state, action) => {
      state.errorCreateOrUpdateMenu = action.payload;
    },

    setVisibleModalCreateOrUpdateMenu: (state, action) => {
      state.visibleModalCreateOrUpdateMenu = action.payload;
    },

    getListMenu: (state) => {
      state.menus = [];
      state.isLoadingListMenu = true;
    },

    getListMenuSuccess: (state, action) => {
      state.isLoadingListMenu = false;
      state.menus = action.payload.metadata.list;
      state.paginationListMenu = {
        currentPage: action.payload.metadata.page,
        perPage: action.payload.metadata.limit,
        totalPage: action.payload.metadata.totalPage,
        totalRecord: action.payload.metadata.total,
      };
    },

    getListMenuFail: (state) => {
      state.menus = [];
      state.isLoadingListMenu = false;
    },

    createMenu: (state) => {
      state.isLoadingBtnCreateOrUpdateMenu = true;
    },

    createMenuSuccess: (state) => {
      state.isLoadingBtnCreateOrUpdateMenu = false;
    },

    createMenuFail: (state) => {
      state.isLoadingBtnCreateOrUpdateMenu = false;
    },

    updateMenu: (state) => {
      state.isLoadingBtnCreateOrUpdateMenu = true;
    },

    updateMenuSuccess: (state) => {
      state.isLoadingBtnCreateOrUpdateMenu = false;
    },

    updateMenuFail: (state) => {
      state.isLoadingBtnCreateOrUpdateMenu = false;
    },
  },
});

export const {
  setErrorCreateOrUpdateMenu,
  setVisibleModalCreateOrUpdateMenu,
  getListMenu,
  getListMenuSuccess,
  getListMenuFail,
  createMenu,
  createMenuSuccess,
  createMenuFail,
  updateMenu,
  updateMenuSuccess,
  updateMenuFail,
} = menuSlice.actions;

export default menuSlice.reducer;
