class PaymentProcessor {
    processPayment(order, paymentMethod) {
      if (paymentMethod === 'CreditCard') {
        // Process credit card payment
        console.log('Processing credit card payment...');
      } else if (paymentMethod === 'PayPal') {
        // Process PayPal payment
        console.log('Processing PayPal payment...');
      } else if (paymentMethod === 'PayPal') {
        // Process PayPal payment
        console.log('Processing PayPal payment...');
      } // ... other payment methods ...
  
      // More logic for processing the order
      console.log('Order processed successfully.');
    }
  }
  
  // Usage
  const paymentProcessor = new PaymentProcessor();
  paymentProcessor.processPayment(order, 'CreditCard');
  