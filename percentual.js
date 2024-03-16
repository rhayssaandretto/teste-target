const monthlyRevenue = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calculateMonthlyRevenue(revenue) {

    const total = Object.values(revenue).reduce((acc, curr) => acc + curr, 0); 

    Object.keys(revenue).forEach((key)=> {
        const percentage = (revenue[key] / total) * 100;
        console.log(`Percentual de ${key}: ${percentage.toFixed(2)}%`);
    });

}

calculateMonthlyRevenue(monthlyRevenue);
