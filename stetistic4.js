let namunaNo = document.querySelector("#namunaNo");
let btn = document.querySelector("#btn");
let send = document.querySelector(".table");
let getData = document.querySelector("#getData")
let xValue = document.querySelectorAll(".X");
// creat input data table
btn.addEventListener(("click"), () => {
    let btnValue = namunaNo.value;
    let html = `<table>`;
    html +=`<tr><thead><th>No.</th>`;
    for ( a=1; a<=btnValue; a++) {
        html += `<th>${a}</th>`;
        no.push(a);
    }
    html += `</thead><tbody></tr><tr><td>X̅</td>`;
    for ( a=1; a<=btnValue; a++) {
        html += `<td><input  type="number" class="X"></input></td>`;
    }
    html +=`</tr><tbody><tr><td>R</td>`;
    for ( a=1; a<=btnValue; a++) {
        html += `<td><input type="number" class="R"></input></td>`;
    }  
    
    html += `</tr><tbody>`;
    html += `<table><tr><td>n<input type="number" class="nad"></td> <td>A<sub>2</sub><input type="number" class="nad"></td> <td>D<sub>3</sub><input type="number" value="0" class="nad"></td> <td>D<sub>4</sub><input type="number" class="nad"></td>  </tr></table>`
    let nad = document.getElementsByClassName("nad");
    send.innerHTML = html;    
});
//array total value sum function
function arraySum(arr) {
    return arr.reduce((accumulator, currentValue) =>  accumulator + currentValue);
}
//  input data add in array
let no = [];
let xArray = [];
let rArray = [];
getData.addEventListener("click",() => {
    console.log(getData);
    let nad = document.getElementsByClassName("nad");
    let n = (nad[0].value);
    let a2 = (nad[1].value);
    let d3 = (nad[2].value);
    let d4 = (nad[3].value);
    let xinputs = document.getElementsByClassName("X");
    let rinputs = document.getElementsByClassName("R");
    for ( i = 0; i < xinputs.length; i++) {
        xArray.push(Number(xinputs[i].value));
    }
    for ( i = 0; i < rinputs.length; i++) {
        rArray.push(Number(rinputs[i].value));
    }
});

    let noSum = [];
    let xArraySum = [];
    let rArraySum = [];
// array to creat table
getData.addEventListener("click",() => {
    let nad = document.getElementsByClassName("nad");
    let chartData = document.querySelector("#chartData");
    let n = (nad[0].value);
    let a2 = (nad[1].value);
    let d3 = (nad[2].value);
    let d4 = (nad[3].value);
    noSum.push(arraySum(no));
    xArraySum.push(arraySum(xArray));
    rArraySum.push(arraySum(rArray));
    let arrData = document.querySelector("#arrData");
    let arrayHtml = `<table><thead><tr> <th>No.</th><th>X̅</th><th>R</th> </tr></thead> <tbody>`;
    for ( a=0; a<xArray.length; a++ ) {
        arrayHtml += `<tr> <td>${no[a]}</td><td>${xArray[a]}</td><td>${rArray[a]}</td></tr>`;
    }
    arrayHtml += `<tr> <td><b>Total</b></td> <td><b>${xArraySum}</b></td> <td><b>${rArraySum}</b></td> </tr>`;
    arrayHtml += `</tbody> </table>`;

    arrData.innerHTML = arrayHtml;
    

    let xrDiv = document.createElement("div");
    let _X_ = xArraySum / no.length;
    let _R_ = rArraySum / no.length;
    let methData = `<math xmlns='http://www.w3.org/1998/Math/MathML'><mi> &#x00B5;</mi> <mo> = </mo> <mfrac> <mrow> <mo> &#x2211;</mo> <mover> <mrow> <mi> X </mi> </mrow> <mrow> <mo> __ </mo> </mrow> </mover> </mrow> <mrow> <mi> m </mi> </mrow> </mfrac> <mo> = </mo> <mfrac> <mrow> <mn> ${xArraySum} </mn> </mrow> <mrow> <mn> ${no.length} </mn> </mrow> </mfrac> <mo> = </mo> <mn><b> ${_X_} </b></mn> </math><br><br>`
    methData += `<math xmlns='http://www.w3.org/1998/Math/MathML'> <mover> <mrow> <mi> R </mi> </mrow> <mrow> <mo> __ </mo> </mrow> </mover> <mo> = </mo> <mfrac> <mrow> <mo> &#x2211; </mo> <mi> R </mi> </mrow> <mrow> <mi> M </mi> </mrow> </mfrac> <mo> = </mo> <mfrac> <mrow> <mn> ${rArraySum} </mn> </mrow> <mrow> <mn> ${no.length} </mn> </mrow> </mfrac> <mo> = </mo> <mn> <b> ${_R_} </b> </mn> </math>`
    xrDiv.classList.add("xrDiv");
    xrDiv.innerHTML = methData;
    arrData.append(xrDiv);
    let xcl = document.createElement("div");
    let cl = document.querySelector("#cl")

    xcl.classList.add("xcl");
    
    let xclData = `<p class="chartName">X̅ આલેખ નિયંત્રણ સીમાઓ</P> <table ><tr><td><b>C.L. = X̅ = ${xArraySum / no.length}</b></td></tr></table>`
    xclData += `<table >
                    <tr><td>U.C.L. = X̅ + A<sub>2</sub>R</td></tr>
                    <tr><td>U.C.L. = ${_X_} + ${a2}(${_R_})</td></tr>
                    <tr><td>U.C.L. = ${_X_}  + ${a2 * _R_}</td></tr>
                    <tr><td><b>U.C.L. = ${_X_ + a2 * _R_}</b></td></tr>
                </table>`
    xclData += `<table >
                <tr><td>L.C.L. = X̅ - A<sub>2</sub>R</td></tr>
                <tr><td>L.C.L. = ${_X_} - ${a2}(${_R_})</td></tr>
                <tr><td>L.C.L. = ${_X_}  - ${a2 * _R_}</td></tr>
                <tr><td><b>L.C.L. = ${_X_ - a2 * _R_}</b></td></tr>
            </table>`
    xcl.innerHTML = xclData;
    cl.append(xcl);
    // chart creat
    upperControlLimit.push(_X_ + a2 * _R_);
    lowerControlLimit.push(_X_ - a2 * _R_);
    let rcl = document.createElement("div");
    rcl.classList.add("rcl");
    let rclData = `<p class="chartName">R આલેખ નિયંત્રણ સીમાઓ</P> <table ><tr><td><b>C.L. = R = ${_R_}</b></td></tr></table>`
    rclData += `<table >
                    <tr><td>U.C.L. = D<sub>4</sub>R</td></tr>
                    <tr><td>U.C.L. = ${d4} * ${_R_}</td></tr>
                    <tr><td><b>U.C.L. = ${d4 * _R_}</></td></tr>
                </table>`
    rclData += `<table >
                <tr><td>L.C.L. = D<sub>3</sub>R</td></tr>
                <tr><td>L.C.L. = ${d3} * ${_R_}</td></tr>
                <tr><td><b>L.C.L. = ${d3 * _R_}</b></td></tr>
            </table>`
    rcl.innerHTML = rclData;
    cl.append(rcl);
});
