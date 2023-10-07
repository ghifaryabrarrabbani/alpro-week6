function getData() {
    var url = document.getElementById("urlInput").value;
    var tableContainer = document.querySelector(".table-container");

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var responseData = JSON.parse(xhr.responseText);

                // Membuat tabel HTML
                var table = "<table>";
                table += "<tr>";
                // Menggunakan keys dari data pertama sebagai kolom tabel
                var keys = Object.keys(responseData[0]);
                for (var i = 0; i < keys.length; i++) {
                    table += "<th>" + keys[i] + "</th>";
                }
                table += "</tr>";

                // Mengisi data ke dalam tabel
                for (var j = 0; j < responseData.length; j++) {
                    table += "<tr>";
                    for (var k = 0; k < keys.length; k++) {
                        table += "<td>" + responseData[j][keys[k]] + "</td>";
                    }
                    table += "</tr>";
                }

                table += "</table>";

                // Menampilkan tabel dalam elemen tableContainer
                tableContainer.innerHTML = table;
            } else {
                // Menampilkan pesan kesalahan jika terjadi error saat mengambil data dari URL
                tableContainer.innerHTML = "Gagal mengambil data dari URL. Status: " + xhr.status;
            }
        }
    };
    xhr.send();
}
