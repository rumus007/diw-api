module.exports = function (sim, simDetails) {
    if (simDetails.company)
        sim.company = simDetails.company;
    if (simDetails.quantity)
        sim.quantity = simDetails.quantity;
    if (simDetails.soldPrice)
        sim.soldPrice = simDetails.soldPrice;
    if (simDetails.rechargeAmount)
        sim.rechargeAmount = simDetails.rechargeAmount;
    if (simDetails.rechargeType)
        sim.rechargeType = simDetails.rechargeType;

    return sim;

}