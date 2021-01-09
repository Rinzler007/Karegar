$("#mail-form").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var print = $("#print").val();
    var size = $("#size").val();
    var phone = $("#phone").val();
    var color = $("#color").val();
    var pin = $("#pin").val();
    var quantity = $("#quantity").val();
    var todayTime = new Date().getTime();
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var item = $("#item").val();
    var templateParams = {
        name: 'Karegar',
        subject: 'Conformation for pre-order',
        to_name: name,
        from_name: 'Karegar',
        message: 'Thanks for showing interest!',
        to_email: email,
        reply_to: email,
        form_name: name,
        form_email: email,
        form_phone: phone,
        form_pin: pin,
        form_print: print,
        form_size: size,
        form_color: color,
        form_quantity: quantity,
        form_item: item,
        form_date: date,
        form_time: time

    };
    sendEmail(templateParams)
});

function sendEmail(templateParams) {


    emailjs.send('service_n7kuh7i', 'template_6b46brj', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Your pre-order has been placed. Have a nice day.")
        }, function(error) {
            console.log('FAILED...', error);
            alert("Error. Try again.")
        });
}