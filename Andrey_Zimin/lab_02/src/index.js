import './lab_02.sass'
import 'jquery'
import * as bootstrap from 'bootstrap'

var $ = require('jquery');

$('#loadButton').on("click", function() {
    $("#toast").css("display", "flex");
});
$('#closeToastButton').on("click", function() {
    $("#toast").css("display", "none");
});

$("#modalScrollable").on("shown.bs.modal", function () {});
$("#modalScrollable").on("hide.bs.modal", function() {});

var modalId = 0;
$("#infoArrynButton").on("click", function() {
    modalId = 1;
    $('#modalScrollableTitle').text($(this).attr("data-title"));
    $('#modalText').text($(this).attr("data-info"));
    $('#modalImage').attr('src', $(this).attr("data-image"));
});

$("#infoBaratheonButton").on("click", function() {
    modalId = 2;
    $('#modalScrollableTitle').text($(this).attr("data-title"));
    $('#modalText').text($(this).attr("data-info"));
    $('#modalImage').attr('src', $(this).attr("data-image"));
});

$("#infoLannisterButton").on("click", function() {
    modalId = 3;
    $('#modalScrollableTitle').text($(this).attr("data-title"));
    $('#modalText').text($(this).attr("data-info"));
    $('#modalImage').attr('src', $(this).attr("data-image"));
});

$("#infoStarkButton").on("click", function() {
    modalId = 4;
    $('#modalScrollableTitle').text($(this).attr("data-title"));
    $('#modalText').text($(this).attr("data-info"));
    $('#modalImage').attr('src', $(this).attr("data-image"));
});

$("#infoTargaryenButton").on("click", function() {
    modalId = 5;
    $('#modalScrollableTitle').text($(this).attr("data-title"));
    $('#modalText').text($(this).attr("data-info"));
    $('#modalImage').attr('src', $(this).attr("data-image"));
});

$(document).ready(function () {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
});
$(document).on('keydown', '.card-info', function(e) {
    if(e.key=='ArrowRight'){
        switch(modalId){
            case 1:
                modalId = 2;
                $('#modalScrollableTitle').text($(infoBaratheonButton).attr("data-title"));
                $('#modalText').text($(infoBaratheonButton).attr("data-info"));
                $('#modalImage').attr('src', $(infoBaratheonButton).attr("data-image"));
                break;
            case 2:
                modalId = 3;
                $('#modalScrollableTitle').text($(infoLannisterButton).attr("data-title"));
                $('#modalText').text($(infoLannisterButton).attr("data-info"));
                $('#modalImage').attr('src', $(infoLannisterButton).attr("data-image"));
                break;
            case 3:
                modalId = 4;
                $('#modalScrollableTitle').text($(infoStarkButton).attr("data-title"));
                $('#modalText').text($(infoStarkButton).attr("data-info"));
                $('#modalImage').attr('src', $(infoStarkButton).attr("data-image"));
                break;
            case 4:
                modalId = 5;
                $('#modalScrollableTitle').text($(infoTargaryenButton).attr("data-title"));
                $('#modalText').text($(infoTargaryenButton).attr("data-info"));
                $('#modalImage').attr('src', $(infoTargaryenButton).attr("data-image"));
                break;
            case 5:
                modalId = 1;
                $('#modalScrollableTitle').text($(infoArrynButton).attr("data-title"));
                $('#modalText').text($(infoArrynButton).attr("data-info"));
                $('#modalImage').attr('src', $(infoArrynButton).attr("data-image"));
                break;
        }
    }
    if(e.key=='ArrowLeft'){
        //$("#buttonCloseModal").trigger('click');
        switch(modalId){
            case 1:
                modalId = 5;
                $('#modalScrollableTitle').text($(infoTargaryenButton).attr("data-title"));
                $('#modalText').text($(infoTargaryenButton).attr("data-info"));
                $('#modalImage').attr('src', $(infoTargaryenButton).attr("data-image"));
                break;
            case 2:
                modalId = 1;
                $('#modalScrollableTitle').text($(infoArrynButton).attr("data-title"));
                $('#modalText').text($(infoArrynButton).attr("data-info"));
                $('#modalImage').attr('src', $(infoArrynButton).attr("data-image"));
                break;
            case 3:
                modalId = 2;
                $('#modalScrollableTitle').text($(infoBaratheonButton).attr("data-title"));
                $('#modalText').text($(infoBaratheonButton).attr("data-info"));
                $('#modalImage').attr('src', $(infoBaratheonButton).attr("data-image"));
                break;
            case 4:
                modalId = 3;
                $('#modalScrollableTitle').text($(infoLannisterButton).attr("data-title"));
                $('#modalText').text($(infoLannisterButton).attr("data-info"));
                $('#modalImage').attr('src', $(infoLannisterButton).attr("data-image"));
                break;
            case 5:
                modalId = 4;
                $('#modalScrollableTitle').text($(infoStarkButton).attr("data-title"));
                $('#modalText').text($(infoStarkButton).attr("data-info"));
                $('#modalImage').attr('src', $(infoStarkButton).attr("data-image"));
                break;
        }
    }
});