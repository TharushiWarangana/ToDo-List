
let titlelistarray=[];


function addlist(){
    
    let title=document.getElementById("Title").value;
    let description=document.getElementById("Description").value;
    let time=document.getElementById("time").value;

    let titles={
        ti:title,
        de:description,
        tim:time
    };

    titlelistarray.push(titles);


    console.log(titlelistarray)


    let gettable=document.getElementById("todolistcart").value;

    let body=`
           <tr>
            <th></th>
        </tr>`;

        titlelistarray.forEach(labeltodo =>{
                    body+=`
                    
                        <td>
                        
                        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${labeltodo.ti}</h5>
    <p class="card-text">${labeltodo.de}</p>
    <p class="card-text">${labeltodo.tim}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>

  <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Task Done
  </label>

</div>
</div>



                        </td>
                        
                   `;
                })
                todolistcart.innerHTML=body;
                


}
