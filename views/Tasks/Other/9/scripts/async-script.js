const fetchDataPromise = async url=>{
  const response = await fetch(url);
  if(response.status==404){throw new Error();}
  const data = await response.json();
  return data;
}