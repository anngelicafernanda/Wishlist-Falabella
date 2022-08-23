//key

const ActionButton = ({ title, className, callback }) => {
  return (
    <button className={className} onClick={() => callback()}>
      {title}
    </button>
  );
};

export default ActionButton;
