import React from "react";
import {connect} from "react-redux"
import {modifyWord} from "../../redux/actions/postAction"

const Componente2 = ({modifyWord}) => {
    const palabraRef = React.useRef(null)
  return (
    <div>
      <input ref={palabraRef} type="text" placeholder="La palabra" />
      <button onClick={() => {modifyWord(palabraRef.current.value)}}>Add</button>
    </div>
  );
};

export default connect(null, {modifyWord})(Componente2);
