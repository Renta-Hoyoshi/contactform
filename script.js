let selectAge = document.getElementById('age');

for ( let i = 17; i <= 65; i++ ) {
    let options = document.createElement('option');

    if( i >= 18 ){
    options.value = i + "歳";
    options.textContent = i + "歳";
    } else {
    options.value = "選択してください";
    options.textContent = "選択してください";
    }

    selectAge.appendChild(options);
}