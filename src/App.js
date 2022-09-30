import './App.css';


 const object=[
  {label:"Name",
    inputType : "text",
  placeholder:"shivam"
  },
  {label:"Email",
  inputType : "email",
placeholder:"email@.com"
},
{
  label:"Contect Number",
  inputType:"number",
  placeholder:"123"
},{
  label:"contect",
  inputType:"number",
  placeholder:"123",
}
, {label:"Message",
inputType : "text",
placeholder:"Give your Suggestions here"
},
 ]
function App() {
  return (
    <div className="App">
      {object.map(({label,inputType,placeholder})=>{
        return(<>
        <form>
          {/* <label>{label}</label>
          <input type={inputType} value={placeholder}/> */}

          <div class="form-group">
    <label >{label}</label>
    <input type={inputType} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={placeholder}/>

  </div>
        </form>
        </>
        )
      })}
     <button type="submit" class="btn btn-primary" >Submit</button>
    </div>
  );
}

export default App;
