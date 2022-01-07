let allData = ""
function errInput() {
    Swal.fire({
        title: 'Tolong Isi Variabel Input',
        icon: 'error',
        confirmButtonText: 'OK'
      })
}

function errProses() {
    Swal.fire({
        title: 'Tolong Isi Variabel Proses',
        icon: 'error',
        confirmButtonText: 'OK'
      })
}

function errOutput() {
    Swal.fire({
        title: 'Tolong Isi Variabel Output',
        icon: 'error',
        confirmButtonText: 'OK'
      })
}

function inputData(data1, data2, data3, data4, data5) {
    let result;
    let result2;
    result = Number(data1) + Number(data2) + Number(data3) + Number(data4) + Number(data5);
    result2 = result / 5;
    return result2;
}

function prosesData(data1, data2, data3) {
    let result;
    let result2;
    result = Number(data1) + Number(data2) + Number(data3);
    result2 = result / 3;
    return result2
}

function outputData(data1, data2, data3, data4) {
    let result;
    let result2;
    result = Number(data1) + Number(data2) + Number(data3) + Number(data4);
    result2 = result / 4;
    return result2;
}


function hitungData(data1, data2, data3) {
    if (data1 >= 3 && data2 >= 3 && data3 >= 3) {
        allData = "Paripurna"
        return allData;
    } else if ((data1 >= 3 || data2 >= 3) && (data3 >= 3)) {
        allData = "Mandiri"
        return allData;
    } else if ((data1 >= 3 && data2 >= 3) && (data3 < 3)) {
        allData = "Berkembang"
        return allData;
    } else if (data1 < 3 && data2 < 3 && data3 < 3) {
        allData = "Dasar"
        return allData;
    } else if (data1 >= 3 || data2 >= 3 || data3 >= 3) {
        allData = "Dasar"
        return allData;
    } else {
        console.log("error");
    }
}

function tutorial2() {
    Swal.fire({
        title: "Petunjuk Aplikasi",
        icon: 'info',
        confirmButtonText: 'OK',
        html: 
        '<p style="font-size:20px;font-weight:bold;"> Petunjuk : </p>' +
        '<p style="text-align:justify;font-size:20px;">Nilai <b>Kurang</b> sampai dengan <b>Baik Sekali</b> hanyalah indikator untuk menghitung hasil klasifikasi bukan untuk menentukan keberadaan fasilitas.' +
        ' Pilih salah satu indikator untuk setiap pertanyaan kemudian klik submit<br></p>' +
        '<p style="font-size:20px;font-weight:bold;">Informasi Aplikasi :</p>' +
        '<p style="text-align:justify;font-size:20px;"> Bobot dari masing-masing indikator di variabel input, proses dan output adalah sama yaitu satu. Total bobot variabel input adalah 5, variabel proses adalah 3 dan variabel output 4.<br><br>' +
        'Jadi Untuk menetapkan kinerja dari masing masing indikator, maka kategori kurang diberi nilai 1, kategori cukup diberi nilai 2, untuk kategori baik diberi nilai 3 dan kategori Baik Sekali  diberi nilai 4.'
        
    })
}

function tutorial() {
    Swal.fire({
        title: "Petunjuk Aplikasi",
        icon: 'info',
        text: 'Apakah anda ingin membaca petunjuk aplikasi ?',
        showDenyButton: true,
        confirmButtonText: "Ya",
        denyButtonText: "Tidak"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Petunjuk Aplikasi",
                icon: 'info',
                confirmButtonText: 'OK',
                html: 
                '<p style="font-size:20px;font-weight:bold;"> Petunjuk : </p>' +
                '<p style="text-align:justify;font-size:20px;">Nilai <b>Kurang</b> sampai dengan <b>Baik Sekali</b> hanyalah indikator untuk menghitung hasil klasifikasi bukan untuk menentukan keberadaan fasilitas.' +
                ' Pilih salah satu indikator untuk setiap pertanyaan kemudian klik submit<br></p>' +
                '<p style="font-size:20px;font-weight:bold;">Informasi Aplikasi :</p>' +
                '<p style="text-align:justify;font-size:20px;"> Bobot dari masing-masing indikator di variabel input, proses dan output adalah sama yaitu satu. Total bobot variabel input adalah 5, variabel proses adalah 3 dan variabel output 4.<br><br>' +
                'Jadi Untuk menetapkan kinerja dari masing masing indikator, maka kategori kurang diberi nilai 1, kategori cukup diberi nilai 2, untuk kategori baik diberi nilai 3 dan kategori Baik Sekali  diberi nilai 4.'
                
            })
        } 
    })
}

document.getElementById('tutor-box').addEventListener('click', function() {
    tutorial2();
});

document.getElementById('submit-btn').addEventListener('click', function() {
    let input1 = document.querySelector('input[name="input-soal1"]:checked')?.value;
    let input2 = document.querySelector('input[name="input-soal2"]:checked')?.value;
    let input3 = document.querySelector('input[name="input-soal3"]:checked')?.value;
    let input4 = document.querySelector('input[name="input-soal4"]:checked')?.value;
    let input5 = document.querySelector('input[name="input-soal5"]:checked')?.value;
    if(input1 == undefined || input2 == undefined || input3 == undefined || input4 == undefined || input5 == undefined) {
        return errInput();
    }

    let proses1 = document.querySelector('input[name="proses-soal1"]:checked')?.value;
    let proses2 = document.querySelector('input[name="proses-soal2"]:checked')?.value;
    let proses3 = document.querySelector('input[name="proses-soal3"]:checked')?.value;
    if(proses1 == undefined || proses2 == undefined || proses3 == undefined) {
        return errProses();
    }

    let output1 = document.querySelector('input[name="output-soal1"]:checked')?.value;
    let output2 = document.querySelector('input[name="output-soal2"]:checked')?.value;
    let output3 = document.querySelector('input[name="output-soal3"]:checked')?.value;
    let output4 = document.querySelector('input[name="output-soal4"]:checked')?.value;
    if(output1 == undefined || output2 == undefined || output3 == undefined || output4 == undefined) {
        return errOutput();
    }

    let resultInput = inputData(input1, input2, input3, input4, input5);
    let resultProsses = prosesData(proses1, proses2, proses3);
    let resultOutput = outputData(output1, output2, output3, output4);
    resultFinal = hitungData(resultInput, resultProsses, resultOutput);
    
    Swal.fire({
        title: "Klasifikasi desa : " + resultFinal,
        icon: "success",
        confirmButtonText:"OK"
    })
});
