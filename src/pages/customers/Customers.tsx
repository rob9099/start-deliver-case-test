import "./customers.css"
import Header from '../../components/header/Header'
import {customerType} from "../../models/customerType"
import {useState, useEffect} from "react"
import Search from '../../components/search/Search'
import Loader from '../../components/loader/Loader'

const Customers = () => {

  const [loaded, setLoaded] = useState(false)

  const customerRender = (customerArray:customerType) => {

    if(document.getElementById('table-body')){
      let element = document.getElementById('table-body')
      element?.remove();
    }

    let customerTable = document.getElementById('customerTable')
    let tableBody = document.createElement('tbody');
    tableBody.setAttribute("id", "table-body");
    customerTable?.appendChild(tableBody)

    let table = document.getElementById('table-body')
    for(let entry of customerArray){
      let row = document.createElement('tr');
      row.setAttribute("id", "row");
      let item = {
        name: entry.name,
        arr: entry.arr,
        id: entry.id
      }
      Object.values(item).forEach(value => {
        let tableData = document.createElement('td');
        //tableData.onclick = function() { test() };
        if(typeof value === 'string') {
          tableData.setAttribute("class", "customer-name");
          tableData.setAttribute("style", "color: #2050fe; text-decoration: underline;");
        }else{
          tableData.setAttribute("style", "font-weight: bold;");
        }
        tableData.appendChild(document.createTextNode(value.toString()));
        row.appendChild(tableData);
      });
        table?.appendChild(row);
    }
  }


  useEffect(() => {
    fetch("https://startdeliver-mock-api.glitch.me/customer")
    .then((response) => response.json())
    .then((data) => {
      customerRender(data)
      setLoaded(true)
    })
    .catch((error) => {
        console.error("Error fetching report data:", error)
    })
  }, [])
  
  
  return (
    <>
      <Header />
      <div className='customer-container'>
        <section>
          <h1>Customers</h1>
        </section>
        <section>
          <Search searchResults={customerRender}/>
        </section>
        <section>
          {loaded?
            <table id='customerTable'>
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>ARR</th>
                  <th>ID</th>
                </tr>
              </thead>
            </table>
          :<Loader />
          }
        </section>
      </div>
    </>
  );
};
export default Customers;