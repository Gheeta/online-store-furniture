
// convert price number to format with dividing by 100

export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD',
  }).format(number /100)
  return newNumber
    
}

//getUniqueValues of filters as companies, categories and colors
export const getUniqueValues = (data, type) => {
  let unique = data.map( (item)=> item[type])
  //console.log(unique);
  if(type==='colors'){
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}
