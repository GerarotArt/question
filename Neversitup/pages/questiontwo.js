import React,{ useState , useEffect } from "react"
import {DataTable} from "./components/dataTable";
import axios from "axios"
import {Breadcrumb} from "./components/breadcrumb"

export default function Questiontwo() {
    const [dataLlist , setDataList] = useState([])
    const colFields = [
        ['terminology', "terminology", "100%"],
      ];
    const [body, setBody] = useState({
        columns: colFields.map((col, index) => {
            return {
            label: col[0],
            field: col[1],
            sort: "desc",
            };
        }),
    });

    const GetData = async() => {
        const resultData = await axios({
            url: 'https://api.publicapis.org/categories',
            method: "get",
            headers: {
                "Accept": "application/json; charset=utf-8",
                "Content-Type": "application/json; charset=utf-8",
            },
        })
        setBody({
            columns: colFields.map((col, index) => {
                return {
                label: col[0],
                field: col[1],
                sort: "desc",
                };
            }),
        })
        if(resultData.data.length > 0){
            ListTable(resultData.data)
        }
    }

    const ListTable = (dataTable) => {
        setBody({
            columns: colFields.map((col, index) => {
              return {
                label: col[0],
                field: col[1],
                sort: "desc",
                attributes: {
                  width: col[2] ?? "auto",
                  class: index === 0 ? "pl-4" : "text-left",
                },
              };
            }),
            rows: dataTable.map((row, index) => {
              return {
                terminology: row
              }
            })
        })

    
    }
    
    useEffect(()=>{
        GetData()
    },[])
    return (
        <>
        <Breadcrumb page="Question2"/>
        <div className="container pt-5">
            <DataTable
                body={body}
                order={["formdata", "desc"]}
            />
        </div>
        </>
    )
}