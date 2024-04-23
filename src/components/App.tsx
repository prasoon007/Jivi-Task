import { useEffect, useState } from 'react';
import "./styles.css";
import _ from 'lodash';
import InputForm from './Forms/InputForm';
import ConfirmForm from './Forms/ConfirmForm';
import SubmitSuccess from './Forms/Success';
import axios from 'axios';
import Loader from './Loader/Loader';





const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'Male',
    dob: '',
    systollicBp: 60,
    diastollicBp: 120,
    hr: 60
  });

  const reinitiateFormData = () => {
    setFormData({
      name: '',
      gender: 'Male',
      dob: '',
      systollicBp: 60,
      diastollicBp: 120,
      hr: 60
    })
  }

  const [formSteps, setFormSteps] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (formSteps === 3) {
      setIsLoading(true);
      axios.post('https://dummy.restapiexample.com/api/v1/create', formData)
        .then(response => {
          if (response.status === 200) {
            setFormSteps(4)
            console.log('API call successful:', response.data);
          } else {
            setFormSteps(1)
            console.error('API call failed with status:', response.status);
          }
          setIsLoading(false)
        })
        .catch(error => {
          setIsLoading(false)
          setFormSteps(1)
          console.error('API call failed:', error);
        });
    }
  }, [formSteps, formData]);

  if (isLoading) {
    return <>
      <Loader />
    </>
  }


  let formComponent;
  switch (formSteps) {
    case 1:
      formComponent = <InputForm formData={formData} setFormData={setFormData} setFormStep={setFormSteps} />;
      break;
    case 2:
      formComponent = <ConfirmForm setFormStep={setFormSteps} formData={formData} />;
      break;
    case 4:
      formComponent = <SubmitSuccess setFormData={reinitiateFormData} setFormStep={setFormSteps} />
      break;
  }

  return (<>
    {formComponent}
  </>
  );
}

export default App;
