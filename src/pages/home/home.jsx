import React from 'react'
import Navigation from '../navigation/navbarMegamenu'
import Header from '../../header'
import SearchMedicineQuery from '../searchMedicineProduct/SearchMedicineQuery'


import DebouncingReal from '../../debouncing/DebouncingReal'
import DEBOUNCINGConcept from '../../debouncing/DEBOUNCINGConcept'
import UseMemo from '../../performanceOptimazation/useMemo'
import UseEffect from '../../performanceOptimazation/useEffectHook'
import UseMemothappa from '../../performanceOptimazation/UseMemothappa'
import Banner from '../../Banner/banner'
import Banner1 from '../../Banner/banner1'
import SearchProducts from '../../common/searchbar'


const Home = () => {
  return (
  <>
  {/* <UseMemo/>
  <DEBOUNCINGConcept/> */}
  {/* <DebouncingReal/> */}
{/* <Header/>
<SearchMedicineQuery/>
<Navigation/>
<Banner/> */}
{/* <UseEffect/>
 <Banner/> */}
  <Banner/> 
 <Banner1/>
 <SearchProducts/>
{/* <UseMemothappa/> */}
  </>
  )
}

export default Home