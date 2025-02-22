const Button = ({ children, onClick }) => {
    function handleDonate() {
      alert("Thank you for your donation!");
    };


    return (
      <button 
      onClick={handleDonate} 
      className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        Donate!
      </button>
    );
  };


export default Button;