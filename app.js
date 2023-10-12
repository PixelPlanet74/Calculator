
let display = document.getElementById("display");
        let lastInputIsOperator = false;

        function appendToDisplay(value) {
            if (value === '%' && display.value === "") {
                return;
            }
            
            if (lastInputIsOperator && isOperator(value)) {
                return;
            }

            display.value += value;
            lastInputIsOperator = isOperator(value);
        }

        function appendToOperator(value) {
            if (!lastInputIsOperator) {
                display.value += value;
                lastInputIsOperator = true;
            }
        }

        function isOperator(char) {
            return ['+', '-', '*', '/'].includes(char);
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }

        function clearDisplay() {
            display.value = '';
            lastInputIsOperator = false;
        }
        function clearOnce(){
            display.value = display.value.substring(0, display.value.length-1);
            display.value = display.value;
        }