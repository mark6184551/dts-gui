import {Paper,ButtonGroup} from '@material-ui/core';
import IconBotton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import BackupIcon from '@material-ui/icons/Backup';
import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react'
import{ useTablePipeline, features, BaseTable} from 'ali-react-table'
import { BiSearchAlt2 } from 'react-icons/bi'
import './App.css';
import "./grid-init-setting.js"
//import {RestoreJobConfig} from "./store_job.js"
import data from './assets/locales.json'
import job_dialog from "./job_dialog.js"
import AlertDialogSlide from './testing';
import Download_zip from './download_zip'


function App() {
  const job_data = [
    {id: 1, 
    job_id: 191,
    job_state: 'SUCCESS',
    job_name:'CTTAII_2021071984003669',
    start_date:'2021/07/19 08:40:20',
    end_date:'2021/07/19 08:40:20',
    config:'Finish & Update DB',
    creater:'CYTAII',
    create_date:'2021/07/09 08:40:03',
    modifier:'SYSTEM',
    modify_date:'2021/07/09 08:40:20',
    mark:'test. Restore by: Ubterposerid.upload 1 IDs. Success: 0 od 1 Fail: 1 of 1. Fail ID List:[C]. Success ID List:[]'
},
{
    id: 2, 
    job_id: 190, 
    job_state: 'SUCCESS',
    job_name:'CTTAII_20210716123907549',
    start_date:'2021/07/16 12:39:20',
    end_date:'2021/07/16 12:39:21',
    config:'Finish & Update DB',
    creater:'CYTAII',
    create_date:'2021/07/09 12:39:07',
    modifier:'SYSTEM',
    modify_date:'2021/07/09 12:39:21',
    mark:'test. Restore by: Ubterposerid.upload 1 IDs. Success: 4 of 7 Fail: 3 of 7. Fail ID List:[A,B,C]. Success ID List:[D,E,F,G]'
}
]
const column = [
    {code:'id',name:'編號',width:50},
    {code:'job_id',name:'job ID',width:50},
    {code:'job_state',name:'job 狀態',width:100},
    {code:'job_name',name:'job 名稱',width:350},
    {code:'start_date',name:'job 開始時間',width:200},
    {code:'end_date',name:'job 結束時間',width:200},
    {code:'config',name:'上次執行訊息',width:200},
    {code:'creater',name:'建立者',width:100,},
    {code:'create_date',name:'建立時間',width:200},
    {code:'modifier',name:'修改者',width:100},
    {code:'modify_date',name:'修改時間',width:200},
    {code:'mark',name:'註記',width:600},
]
  return (
    <div className="QPL">
      <div className="toolbar">
        <div>
          <content slot="top" select=".top"></content>
        </div>
        <div className="title">
          <div>{data.zh.RESTORE_JOB}</div>
          <div className="subtitle">DTS: Die Traceability System</div>
        </div>
      </div>
      <div className="main-container">
        <Paper elevation={3}>
          <collapse-query-bar title={data.zh.QUERY_CONDITION} opened on-changed="_notifyResize" class="flex-none vertical-LV1-space">
            <div id="queryCriteriaDiv" className="layout horizontal wrap">
              <BiSearchAlt2 /> <AlertDialogSlide />


            </div>

          </collapse-query-bar>

          <div id="resultDiv" className="flex layout vertical">
            <div className="flex-none layout horizontal vertical-LV3-space">
              <IconBotton variant="outlined">
                <GetAppIcon className="horizontal-LV1-space horizontal-LV3-space"/>{data.zh.DOWNLOAD_INPUT_IDS}
              </IconBotton>

              <Download_zip />
            </div>
            <div id="restoreGridDiv" className="flex-none vertical-LV3-space">
              <div className="layout-horizontal-center">
                <iron-icon icon="search"></iron-icon>
                <span >Restore Job List and Status</span>
                <hr class="flex" />

              </div>
              <BaseTable dataSource={job_data} columns={column}/>
            </div>
          </div>

        </Paper>
      </div>
    </div>

  )
}

export default App;
