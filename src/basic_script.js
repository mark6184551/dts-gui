const defaultServer = 'http://f12azbev12.tsmc.com.tw:8080';
//const defaultServer = '';
const SYSTEM_NAME = 'DTS';
const SYSTEM_ROLE_PREFIX = 'FCDTS';

const RESTORE_BY_LIST = [
  {label: 'Interposer ID', value: 'interpsId'},
  {label: 'Top Die Wafer ID', value: 'tdWaferId'},
  {label: 'Substrate 2DBC', value: 'sub2DBC'},
  {label: 'Lid 2DBC', value: 'lid2DBC'},
  {label: 'InFO/ Interposer/ Chip Lot ID', value: 'lotId'},
];
const SHOW_DIS_RESTORE_GUI = false;

export {defaultServer, SYSTEM_NAME, SYSTEM_ROLE_PREFIX, RESTORE_BY_LIST, SHOW_DIS_RESTORE_GUI}