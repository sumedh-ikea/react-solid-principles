// PaymentMethod interface
class PaymentMethod {
    processPayment(order) {
      // To be implemented by concrete payment methods
    }
  }
  
  // Concrete payment method classes
  class CreditCardPayment extends PaymentMethod {
    processPayment(order) {
      console.log('Processing credit card payment...');
      // Additional logic specific to credit card payments
    }
  }
  
  class PayPalPayment extends PaymentMethod {
    processPayment(order) {
      console.log('Processing PayPal payment...');
      // Additional logic specific to PayPal payments
    }
  }

  class PayPalPaymentAany extends PaymentMethod {
    processPayment(order) {
      console.log('Processing PayPal payment...');
      // Additional logic specific to PayPal payments
    }
  }
  
  // PaymentProcessor class
  class PaymentProcessor {
    constructor() {
      this.paymentMethods = [];
    }
  
    addPaymentMethod(paymentMethod) {
      this.paymentMethods.push(paymentMethod);
    }
  
    processPayment(order, paymentMethodType) {
      const paymentMethod = this.paymentMethods.find(
        (method) => method.constructor.name === paymentMethodType
      );
  
      if (!paymentMethod) {
        console.error('Payment method not found.');
        return;
      }
  
      paymentMethod.processPayment(order);
      console.log('Order processed successfully.');
    }
  }
  
  // Usage
  const paymentProcessor = new PaymentProcessor();
  paymentProcessor.addPaymentMethod(new CreditCardPayment());
  paymentProcessor.addPaymentMethod(new PayPalPayment());
  
  paymentProcessor.processPayment(order, 'CreditCard');
  