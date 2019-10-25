import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Msg = ({ closeToast }) => (
  <>
    <p> Update available, Please refresh your browser!</p>
    <div>
      <span>From PCs: Press Ctrl + Shift + R....</span>
      <span color="primary" fontWeight={600} fontSize="12px">
        From Mobile Phones: Close all your opened tabs....
      </span>
    </div>
  </>
);

const mapStateToProps = state => {
  return {
    serviceWorkerUpdated: state.serviceWorkerUpdated
  };
};

function App(props) {
  useEffect(() => {
    if (props.serviceWorkerUpdated) {
      toast(<Msg />, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
    return () => {};
  }, [props.serviceWorkerUpdated]);
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          backgroundColor="currentcolor"
          pauseOnVisibilityChange
          draggable
          pauseOnHoverautoClose={3000}
          toastClassName="toast-container"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default connect(mapStateToProps)(App);
