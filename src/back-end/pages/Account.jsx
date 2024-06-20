import React from 'react'

const Account = () => {
  return (
<main className="main-wrap">
  <section className="content-main">
    <div className="content-header">
      <div>
        <h2 className="content-title card-title">Accounts List</h2>
        <p>All Accounts</p>
      </div>
      <div>
        
        <a href="#" className="btn btn-primary btn-sm rounded">
          Create new
        </a>
      </div>
      
    </div>
    <div className="card mb-4">
      <div className="card-body">
      
        {/* compomamets carts  */}
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />
        <ListProduct img="assets/imgs/items/1.jpg" name="test name" price="999" date="200"  />

      </div>
      {/* card-body end// */}
    </div>
    {/* card end// */}
  </section>
  {/* content-main end// */}
  <footer className="main-footer font-xs">
    <div className="row pb-30 pt-15">
      <div className="col-sm-6">©, Multimart</div>
      <div className="col-sm-6">
        <div className="text-sm-end">All rights reserved</div>
      </div>
    </div>
  </footer>
</main>

  )
}

export default Account
