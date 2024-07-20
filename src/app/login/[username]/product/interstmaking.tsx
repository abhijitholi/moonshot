import { useState } from 'react';

const Interests = () => {
  const [interests, setInterests] = useState({
    shoes: true,
    menTShirts: false,
    makeup: true,
    jewellery: true,
    womenTShirts: false,
    furniture: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setInterests((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Interests submitted:', interests);
  };

  return (
    <div className="max-w-md mx-auto p-4 border my-10 rounded-lg bg-white shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Please mark your interests!</h1>
      <p className="mb-4">We will keep you notified.</p>
      {[...Array(1)].map((_, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold mb-2">My saved interests!</h2>
          {Object.entries(interests).map(([key, value]) => (
            <div key={key} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={key}
                name={key}
                checked={value}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor={key} className="capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
            </div>
          ))}
        </div>
      ))}
      
      <div className="flex justify-center mt-4">
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Interests;
