import { useState, ChangeEvent } from "react";
import axios from "axios";

interface InterestsState {
  computers: boolean;
  kids: boolean;
  toys: boolean;
  clothing: boolean;
  outdoors: boolean;
  shoes: boolean;
}

interface EmailProps {
  params: {
    username: string;
  };
}

const Email: React.FC<EmailProps> = ({ params: { username } }) => {
  const [interests, setInterests] = useState<InterestsState>({
    computers: false,
    kids: false,
    toys: false,
    clothing: false,
    outdoors: false,
    shoes: false,
  });

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setInterests((prevInterests) => ({
      ...prevInterests,
      [name]: checked,
    }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('/api/interstmaking', {
        username,
        ...interests,
      });
      ///////////////////////////////////////////
    } catch (error) {
      console.error("Error:", error);
      alert("Error registering user");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border my-10 rounded-lg bg-white shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Please mark your interests!</h1>
      <p className="mb-4">We will keep you notified.</p>
      <h2 className="text-xl font-semibold mb-2">My saved interests!</h2>
      {Object.keys(interests).map((interest) => (
        <div key={interest} className="flex items-center mb-2">
          <input
            type="checkbox"
            name={interest}
            checked={interests[interest as keyof InterestsState]}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
          <label className="capitalize">{interest}</label>
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

export default Email;
