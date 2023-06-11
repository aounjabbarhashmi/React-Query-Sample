import {  useState } from "react";
import { useStore } from "../store/store";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const ZustandExample = () => {
  const {watch, register, handleSubmit,reset, formState: { errors } } = useForm();
  const tasks = useStore((store) => store.tasks);
  const addTask = useStore((store) => store.addTask);
  const onSubmit = (data)=>{
    addTask(data.title , data.status);
    reset();
    console.log(watch("title"))
  }

  // const [data, setData] = useState({title: "",status: ""});
  const [addItem, setAddItem] = useState(false);
  // console.log(">>>", tasks);
 
  
  return (
    <>
      <h1>Zustand & Hook Example</h1>
      {tasks.map((item,index) => {
        return (
          <div key={index}>
            <div>Title: {item.title}</div>
            <div>Status: {item.status}</div>
          </div>
        );
      })}
      <button
      style={{marginBottom: "1rem"}}
        onClick={() => {
          setAddItem(true);
        }}
      >
        Add Item
      </button>
      {addItem && (
        <form onSubmit={handleSubmit(onSubmit)} className="form-flex">
        {/* register your input into the hook by invoking the "register" function */}
        <input {...register("title", { required: true })} />
        {errors.title && <span>This field is required</span>}
        
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("status", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.status && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
        // <form >
        //   <label>Title</label>
        //   <input onChange={(e)=>{
        //     setData((prev)=>({
        //      ...prev,
        //      title:  e.target.value,
        //     }))
        //   }} type="text" />
        //   <label>Status</label>
        //   <input onChange={(e)=>{
        //     setData((prev)=>({
        //      ...prev,
        //      status:  e.target.value,
        //     }))
        //   }} type="text" />
        //   <button
        //     onClick={() => {
        //       addTask(data.title, data.status)
        //       setAddItem(false);
        //     }}
        //     type="submit"
        //   >
        //     Submit
        //   </button>
        // </form>
      )}
    </>
  );
};

export default ZustandExample;
