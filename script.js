
paypal.Buttons({
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: '1.00' // Precio del producto
        }
      }]
    });
  },
  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {
      alert('Pago realizado por ' + details.payer.name.given_name);
      console.log(details);
    });
  },
  onError: function(err) {
    console.error('Error en el pago', err);
    alert('Hubo un error en el pago. Intenta de nuevo.');
  }
}).render('#paypal-button-container');
