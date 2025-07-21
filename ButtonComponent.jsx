const ButtonComponent = ({ label, color = "blue" }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return <button style={buttonStyle}>{label}</button>;
};

export default ButtonComponent;
