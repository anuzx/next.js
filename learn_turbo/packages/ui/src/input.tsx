
interface PropsType{
    placeholder: string
    size: "big" | "small"
   
}


export function TextInput({
    placeholder,
    size,
   

}:PropsType) {
    return (
        <input
            
        style={{
          padding:size==="big" ?20 :  10,
          margin: size==="big" ?20 :  10,
          borderColor: "black",
          borderWidth: 1,
        }}
        placeholder={placeholder}
      ></input>
    );
}