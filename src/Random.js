function Random(props){
return (<span>
    Random value between {props.min} and {props.max} {"=>"} 
    {Math.floor((Math.random() * props.max) + props.min)}
    </span>)

}

export default Random