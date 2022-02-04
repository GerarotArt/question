import React,{ useState, useEffect } from "react";

const BookSearch = (props) => {
  const [booklast , setBooklast] = useState(props.books);
  const [valText , setValText] = useState(
    {
    author: '',
    title: '',
    country: '',
    language : '',
    year : ''
    }
  )
  const filterData = () => {
    const books =  props.books
    var datas = [];
    
     var datas = books.filter(val => {
      var data = [];
      if(valText.author !=''){
        data = val.author.indexOf(valText.author) !== -1
      }
      if(valText.title !=''){
        data = val.title.indexOf(valText.title) !== -1
      }
      return data
    })
    console.log(datas)
  }
  
  useEffect(()=>{
    filterData()
  },[valText])
   return (
      <>
        <div class="book">
         <div class="row">
           <lable class="mr-4">author </lable>
           <input 
             type="text" 
             name="author" 
             onChange={(e) => setValText({
              ...valText,
               author : e.target.value
             })} 
             />
          </div>
           <div class="row">
              <lable class="mr-4">title </lable>
               <input 
                 type="text" 
                 name="title"
                 onChange={(e) => setValText({
                  ...valText,
                   title : e.target.value
                 })} 
                 />
             </div>
          <div class="row">
            <lable class="mr-4">country </lable>
            <input 
              type="text" 
              name="country" 
              onChange={(e) => setValText({
                  ...valText,
                   country : e.target.value
                 })} 
              /> 
          </div>
          <div class="row">
             <lable class="mr-4">language </lable>
             <input 
               type="text" 
               name="language"
                onChange={(e) => setValText({
                  ...valText,
                   language : e.target.value
                 })} 
               />
          </div>
          <div class="row">
            <lable class="mr-4">language </lable>
            <input 
              type="text"
              name="year"
              onChange={(e) => setValText({
                ...valText,
                 year : e.target.value
               })}
              />
          </div>
          <div class="row">
            {booklast.length > 0 ? booklast.map(val=>{
              return (
                <div class="box-data">
                  <div class="row">
                    <lable class="mr-2">author</lable>
                    <lable>{val.author}</lable>
                  </div>
                   <div class="row">
                    <lable class="mr-2">country</lable>
                     <lable>{val.country}</lable>
                  </div>
                   <div class="row">
                    <lable class="mr-2">pages</lable>
                     <lable>{val.pages}</lable>
                  </div>
                   <div class="row">
                    <lable class="mr-2">title</lable>
                     <lable>{val.title}</lable>
                  </div>
                   <div class="row">
                    <lable class="mr-2">year</lable>
                     <lable>{val.year}</lable>
                  </div>
                </div>
              )
            }):''}
           </div>
       </div>
      </>
   )
}

export default BookSearch;