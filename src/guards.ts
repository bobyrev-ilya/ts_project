function strip(s: string | number){
    if (typeof s === 'number') {
        return s.toFixed(2);
    }
    return s.trim();
}
 class TestResult{
    result: string
 }

 class TestMessage{
    message: string
 }

function handle(test: TestMessage | TestResult) {
    if (test instanceof TestMessage) {
        return test.message;
    }
    return test.result;
}

//========================

type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType) {
    ///
}

setAlertType('danger');
//setAlertType('test'); // Error

