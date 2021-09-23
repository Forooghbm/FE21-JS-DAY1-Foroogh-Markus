// Baisic 1
function crystalGazer(job_title, location, partners_name, nuber_childrens) {
    return "You will be a " + job_title + " in " + location + " and married to " + partners_name + " with " + nuber_childrens + " Children."
}
console.log(crystalGazer("Programmer" , "Austria" , "Fiora", "2"))

// Basic 2
function ageCalculator(birth_year, current_year) {
    var nowage = current_year - birth_year;
    var nowage2 = current_year - birth_year - 1;
    return "Your are either " + nowage + " or " + nowage2
}
console.log(ageCalculator("2006" ,"2021"))

// Basic 3
function ageCalculator2(birth_year,today) {
    var today = (new Date()).getFullYear();
    var nowage = today - birth_year;
    var nowage2 =  today - birth_year - 1;
    return "Your are either " + nowage + " or " + nowage2
}
console.log(ageCalculator2("2006","today"))
