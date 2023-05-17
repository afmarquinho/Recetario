

const Key = () => {
const date = Date.now().toString(36).substring(2);
const ramdom = Math.random().toString(36).substring(2);
  return date + ramdom
    
}

export default Key
