import VehiculeList from "./component/vehiculeComponents/vehiculeList";

function App() {
  
  return (
    <div>
      <VehiculeList />
    </div>
  );
}

export default App;

/*
async function getVehicules() {
  try {
    // 👇️ const data: GetUsersResponse
    const { data } = await axios.get<GetVehiculeResponse>(
      'http://localhost:3002/getVehicules',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

const res = getVehicules();
console.log(JSON.stringify(res, null, 4));
*/
