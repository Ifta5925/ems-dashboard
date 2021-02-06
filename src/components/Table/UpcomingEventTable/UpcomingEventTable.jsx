import React from 'react'
import { Table, Tag, Space, Image} from 'antd';



const columns = [
    
    {
        title: 'Name',
        dataIndex: 'Eventname',
        key: 'Eventname',
    },
    // {
    //     title: 'Up-Event title',
    //     dataIndex: 'Eventtitle',
    //     key: 'Eventtitle',
    // },
    // {
    //     title: 'Up-Event Duration',
    //     key: 'EventDuration',
    //     dataIndex: 'EventDuration',   
    // },
    {
        title: 'Date',
        key: 'EventDate',
        dataIndex: 'EventDate',        
    },
    {
        title: 'Type',
        key: 'Eventtype',
        dataIndex: 'Eventtype',    
    },
    {
        title: 'Status',
        key: 'Eventstatus',
        dataIndex: 'Eventstatus',    
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a> {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        Eventname: 'White based Wedding',
        // Eventtitle: '',
        // EventDuration: 'John Brown',
        EventDate: '29 January 2021',
        Eventtype:'Wedding',
        // Description: 'dummy dummy dummy dummy 1',
        Eventstatus: "Activate",
     
    },
    {
        key: '2',
        Eventname: 'Jungle Themed Birthday',
        // Eventtitle: 'John Brown',
        // EventDuration: 'John Brown',
        EventDate: '29 october 2021',
        Eventtype:'Birthday',
        // Description: 'dummy dummy dummy dummy 1',
       
    },
    // {
    //     key: '3',
    //     Eventname: 'John Brown',
    //     Eventtitle: 'John Brown',
    //     // EventDuration: 'John Brown',
    //     EventDate: '29 october 2021',
    //     Eventtype:'Wedding',
    //     Description: 'dummy dummy dummy dummy 1',
      
    // },
];
const UpcomingEvent = () => {
    return (
        
          
            <Table columns={columns} dataSource={data} />
       
    )
}

export default UpcomingEvent