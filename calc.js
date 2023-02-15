function displayNum(num)
{
    ee.value+=num
}

function evaluateExpr()
{
    // expr=ee.value
    // op=eval(expr)
    // ee.value=op

    ee.value=eval(ee.value)
}
function allclr()
{
    ee.value=""
}


function backSpace()
{
    ee.value=ee.value.slice(0,-1)
}