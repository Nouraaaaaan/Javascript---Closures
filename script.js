//------------------------------------------Closures------------------------------------------------------------------------------//

//Closures : an inner function has always access to the variables and parameters of its outer function , even after the outer 
//funtion has returned.

function Retirement(RetirementAge)
{
    var a = ' Years left until retirement.';

    return function(YearOfBirth)
    {
       var Age = 2019 - YearOfBirth;

       console.log((RetirementAge - Age)+a);

    }

}

Retirement(60)(2005);