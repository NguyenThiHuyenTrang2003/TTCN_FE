import callApi from "../callApi";
import {
  getListTables, getListTablesSuccess, getListTablesFail,
  createTable, createTableSuccess, createTableFail,
  updateTable, updateTableSuccess, updateTableFail,
  deleteTable, deleteTableSuccess, deleteTableFail,
  processPayment, processPaymentSuccess, processPaymentFail,
  printInvoice, printInvoiceSuccess, printInvoiceFail,
  mergeInvoices, mergeInvoicesSuccess, mergeInvoicesFail
} from "../../states/modules/table";

// Lấy danh sách bàn
export const getListTables = (dataFilter = {
  perPage: 10,
  page: 1
}) => async (dispatch, getState) => {
  let path = `api/v1/tables?limit=${dataFilter.perPage}&page=${dataFilter.page}`;

  if (dataFilter.keySearch) {
    path += `&keyword=${dataFilter.keySearch}`;
  }

  if (dataFilter.status && dataFilter.status.length > 0) {
    path += `&status=${dataFilter.status}`;
  }

  if (dataFilter.order && dataFilter.column) {
    path += `&orderBy=${dataFilter.order}&sortBy=${dataFilter.column}`;
  }

  return callApi({
    method: 'get',
    apiPath: path,
    actionTypes: [getListTables, getListTablesSuccess, getListTablesFail],
    variables: {},
    dispatch,
    getState
  });
};

// Tạo mới một bàn
export const handleCreateTable = (data) => async (dispatch, getState) => {
  return callApi({
    method: 'post',
    apiPath: `api/v1/tables`,
    actionTypes: [createTable, createTableSuccess, createTableFail],
    variables: data,
    dispatch,
    getState
  });
};

// Cập nhật bàn
export const handleUpdateTable = (data, idTable) => async (dispatch, getState) => {
  return callApi({
    method: 'patch',
    apiPath: `api/v1/tables/${idTable}`,
    actionTypes: [updateTable, updateTableSuccess, updateTableFail],
    variables: data,
    dispatch,
    getState
  });
};

// Xóa bàn
export const handleDeleteTable = (idTable) => async (dispatch, getState) => {
  return callApi({
    method: 'delete',
    apiPath: `api/v1/tables/${idTable}`,
    actionTypes: [deleteTable, deleteTableSuccess, deleteTableFail],
    variables: {},
    dispatch,
    getState
  });
};

// Thanh toán hóa đơn của bàn
export const handlePayment = (tableId) => async (dispatch, getState) => {
  return callApi({
    method: 'post',
    apiPath: `api/v1/tables/${tableId}/payment`,
    actionTypes: [processPayment, processPaymentSuccess, processPaymentFail],
    variables: {},
    dispatch,
    getState
  });
};

// In hóa đơn của bàn
export const handlePrintInvoice = (tableId) => async (dispatch, getState) => {
  return callApi({
    method: 'get',
    apiPath: `api/v1/tables/${tableId}/invoice`,
    actionTypes: [printInvoice, printInvoiceSuccess, printInvoiceFail],
    variables: {},
    dispatch,
    getState
  });
};

// Gộp hóa đơn của nhiều bàn
export const handleMergeInvoices = (tableIds) => async (dispatch, getState) => {
  return callApi({
    method: 'post',
    apiPath: `api/v1/tables/merge-invoices`,
    actionTypes: [mergeInvoices, mergeInvoicesSuccess, mergeInvoicesFail],
    variables: { tableIds }, // tableIds là danh sách ID bàn cần gộp
    dispatch,
    getState
  });
};
