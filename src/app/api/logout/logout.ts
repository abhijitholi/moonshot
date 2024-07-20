import axios from 'axios';
exports.logoutUser = async function logoutUser(email: string) {
    try {
      const response = await axios.post('/api/logout', { rname });

      if (response.status === 200) {
        console.log(response.data); // Logout successful
        // Optionally, you could redirect the user or update the UI
      } else {
        console.error(response.data.error); // Error handling
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }