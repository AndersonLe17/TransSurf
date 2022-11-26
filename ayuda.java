table = $('#tableProgramacion').DataTable({
    "ajax": {
        "url": "http://localhost:8080/api/programacion",
        "method": "GET",
        "headers": {
            "Authorization": 'Bearer ' + localStorage.token
        },
        "dataSrc": ""
    },
    "columns": [
        .
        .
        .
    ]
});