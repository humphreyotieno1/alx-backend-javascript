export class Utils {
    static calculateNumber(type, a, b) {
      switch (type) {
        case 'SUM':
          return a + b;
        case 'SUBTRACT':
          return a - b;
        case 'DIVIDE':
          if (b === 0) {
            return 'Error';
          }
          return a / b;
        default:
          return 'Unknown type';
      }
    }
  }
