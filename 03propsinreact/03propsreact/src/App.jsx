import React from 'react'
import Product from './components/product'
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Product  name='amazon echo' description='product from amazon' price={100} />
      <Product  name='iphone echo' description='product from iphone' price={200} />
      <Product  name='samsung echo' description='product from samsung' price={300} />
    </div>
  )
}

export default App