import { _mobiles, _mobileBrands } from './Mobiles'


export function Assignment1() {
  return (
    <div className="App">
      <header className="App-header">
        {
          _mobileBrands.map((Brand) => {
            return (
              <div key={Brand} className='BrandHolder'>
                <div className='BrandHeader'>
                  <h1 className='BrandName'>{Brand}</h1>
                </div>
                {
                  _mobiles.filter((x) => x.brand == Brand).map((mobile, i) => {
                    return (
                      <div key={mobile.name} className='Card'>
                        <div><img className='CardImage' src={mobile.img} alt={mobile.name} /></div>
                        <div className='CardBody'>
                          <h2 className='ModelName'>{mobile.name}</h2>
                          <p>Ram : {mobile.ram}</p>
                          <p>Rom : {mobile.ram}</p>
                          <p>Camera Pixels : {mobile.camera}</p>
                          <p>Price : Rs.{mobile.price} /-</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </header>
    </div>
  );
}