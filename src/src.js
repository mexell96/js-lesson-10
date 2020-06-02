const ids = [145, 292, 298];

for (let i = 0; i < ids.length; i++) {
    async function fetchCurr(id) {  
        const url = id
            ? 'https://www.nbrb.by/api/exrates/currencies/' + id
            : 'https://www.nbrb.by/api/exrates/currencies/';
        const result = await fetch(url);
        const fetchedData = await result.json();
        JSON.stringify(fetchedData);
        let NameMulti = fetchedData.Cur_NameMulti; //название на русском склоняемое
        console.log(NameMulti);
        

        const url2 = id
            ? 'https://www.nbrb.by/api/exrates/rates/' + id
            : 'https://www.nbrb.by/api/exrates/rates/';
        const result2 = await fetch(url2);
        const fetchedData2 = await result2.json();
        JSON.stringify(fetchedData2);
        let Rate = fetchedData2.Cur_OfficialRate // значение курса
        console.log(Rate);
        let Scale = fetchedData2.Cur_Scale  // соотношение 1 к чему-то
        console.log(Scale);
        let Date = fetchedData2.Date  // дата
        console.log(Date);




        let option = document.createElement('option');  // варианты валют 
        for (let i = 0; i < ids.length; i++) {
            i++
        }
        option.value = i;    // 0 = usd 1 = eur 2 = rub
        option.innerHTML = (fetchedData.Cur_Abbreviation);
        curr.append(option);

        
        var select = document.querySelector('select');
        select.onchange = function() {
            var indexSelected = select.selectedIndex,
                option = select.querySelectorAll('option')[indexSelected];   
            var value = option.value;
                
            if (value === '0') {
            async function fetchCurrUSD() {        
                const resultUSD1 = await fetch('https://www.nbrb.by/api/exrates/currencies/145');
                const fetchedDataUSD1 = await resultUSD1.json();
                JSON.stringify(fetchedDataUSD1);
                let NameMultiUSD1 = fetchedDataUSD1.Cur_NameMulti;

                const resultUSD = await fetch('https://www.nbrb.by/api/exrates/rates/145');
                const fetchedDataUSD = await resultUSD.json();
                JSON.stringify(fetchedDataUSD);
                let RateUSD = fetchedDataUSD.Cur_OfficialRate // значение курса
                console.log(RateUSD);
                let ScaleUSD = fetchedDataUSD.Cur_Scale  // соотношение 1 к чему-то
                console.log(ScaleUSD);
                let DateUSD = fetchedDataUSD.Date  // дата
                console.log(DateUSD);

                var val = document.getElementById('byn').value;  // цифра в бел руб
                let tot = val / RateUSD;
                let total = tot.toFixed(2);
                equally.onclick = function() {
                    var val = document.getElementById('byn').value;  // цифра в бел руб
                    document.getElementById('result').innerHTML="Вы можете купить " + total + " " + NameMultiUSD1 + " за "+ val + " BYN по курсу " + RateUSD + " за " + ScaleUSD + " уе на " + DateUSD;
        
                };

            }
            fetchCurrUSD();
            };
            if (value === '1') {
            async function fetchCurrEUR() {
                const resultEUR1 = await fetch('https://www.nbrb.by/api/exrates/currencies/292');
                const fetchedDataEUR1 = await resultEUR1.json();
                JSON.stringify(fetchedDataEUR1);
                let NameMultiEUR1 = fetchedDataEUR1.Cur_NameMulti;

                const resultEUR = await fetch('https://www.nbrb.by/api/exrates/rates/292');
                const fetchedDataEUR = await resultEUR.json();
                JSON.stringify(fetchedDataEUR);
                let RateEUR = fetchedDataEUR.Cur_OfficialRate // значение курса
                console.log(RateEUR);
                let ScaleEUR = fetchedDataEUR.Cur_Scale  // соотношение 1 к чему-то
                console.log(ScaleEUR);
                let DateEUR = fetchedDataEUR.Date  // дата
                console.log(DateEUR);

                var val = document.getElementById('byn').value;  // цифра в бел руб
                let tot = val / RateEUR;
                let total = tot.toFixed(2);

                equally.onclick = function() {
                    var val = document.getElementById('byn').value;  // цифра в бел руб
                    document.getElementById('result').innerHTML="Вы можете купить " + total + " " + NameMultiEUR1 + " за "+ val + " BYN по курсу " + RateEUR + " за " + ScaleEUR + " уе на " + DateEUR;
        
                };

            }
            fetchCurrEUR()
            };
            if (value === '2') { 
            async function fetchCurrRUB() {    
                const resultRUB1 = await fetch('https://www.nbrb.by/api/exrates/currencies/298');
                const fetchedDataRUB1 = await resultRUB1.json();
                JSON.stringify(fetchedDataRUB1);
                let NameMultiRUB1 = fetchedDataRUB1.Cur_NameMulti;

                const resultRUB = await fetch('https://www.nbrb.by/api/exrates/rates/298');
                const fetchedDataRUB = await resultRUB.json();
                JSON.stringify(fetchedDataRUB);
                var RateRUB = fetchedDataRUB.Cur_OfficialRate // значение курса
                console.log(RateRUB);
                let ScaleRUB = fetchedDataRUB.Cur_Scale  // соотношение 1 к чему-то
                console.log(ScaleRUB);
                let DateRUB = fetchedDataRUB.Date  // дата
                console.log(DateRUB);

                var val = document.getElementById('byn').value;  // цифра в бел руб
                let tot = val / (RateRUB / 100);
                let total = tot.toFixed(2);
                equally.onclick = function() {
                    var val = document.getElementById('byn').value;  // цифра в бел руб
                    document.getElementById('result').innerHTML="Вы можете купить " + total + " " + NameMultiRUB1 + " за "+ val + " BYN по курсу " + RateRUB + " за " + ScaleRUB + " уе на " + DateRUB;
        
                };
            };
            fetchCurrRUB();
            };
            
        }
        // equally.onclick = function() {
        //     var val = document.getElementById('byn').value;  // цифра в бел руб
        //     document.getElementById('result').innerHTML="Вы можете купить " + RateRUB + " долларов США за "+ val + " BYN по курсу " + Rate + " за " + Scale + " уе на " + Date;

        // };
    }
    fetchCurr(ids[i]);
}