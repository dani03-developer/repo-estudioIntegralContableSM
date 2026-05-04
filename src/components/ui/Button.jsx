const Button = (props)=>{
  const {classNameBtn} = props;
  return(
    <div className={classNameBtn}>
      {props.children}
    </div>
  );
};
export default Button;