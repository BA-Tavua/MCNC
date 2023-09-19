function GetselectedTable(WType)
{
    var C1, rate, rateC2, rateC3, clearRate, NoOfMeetingHrs;

    C1 = document.getElementById('WType').value
    if (C1 == 'blank')
    {   
        document.getElementById('NoOfMeeting').style.visibility ="hidden";
        document.getElementById('lblFeesC2b').style.visibility ="hidden";
        document.getElementById('lblFeesC3b').style.visibility ="hidden";
        
        document.getElementById('NoOfMH').value = "";
        document.getElementById('FeesC2').value = "";
        document.getElementById('FeesC3').value = "";

        document.getElementById('txtLessTax2').value = "";
        document.getElementById('ddlGSTReg').value = "blank";

        document.getElementById('txtFinalTotalWithHtx').value = "";
        document.getElementById('txtFinalTotalGST').value = "";   



        document.getElementById('NoOfMH@Rate').value = ""
        document.getElementById('FeesC2NoOfMH@Rate').value = ""
        document.getElementById('FeesC3NoOfMH@Rate').value = ""

        document.getElementById('NoOfMH').style.visibility ="hidden";
        document.getElementById('FeesC2').style.visibility ="hidden";
        document.getElementById('FeesC3').style.visibility ="hidden";


        workSubtotal()
        findTotal()
        Row2totalValue()
        Row3totalValue()
    }
    if (C1 == 'MCM-CC' || C1 == 'MCM-CM')
    {
        
        document.getElementById('NoOfMH@Rate').value = ""
        document.getElementById('FeesC2NoOfMH@Rate').value = ""
        document.getElementById('FeesC3NoOfMH@Rate').value = ""
        workSubtotal()
        findTotal()
        Row2totalValue()
        Row3totalValue()


        if (C1 == 'MCM-CC')
        {
            rate = 118.75;
        }
        if (C1 == 'MCM-CM')
        {
            rate = 93.75; 
        }
        document.getElementById('NoOfMeeting').style.visibility ="visible"
        document.getElementById('lblFeesC2b').style.visibility ="hidden";
        document.getElementById('lblFeesC3b').style.visibility ="hidden";

        document.getElementById('NoOfMH').style.visibility ="visible";
        document.getElementById('FeesC2').style.visibility ="hidden";
        document.getElementById('FeesC3').style.visibility ="hidden";

        document.getElementById('NoOfMH').value = "";
        document.getElementById('FeesC2').value = "";
        document.getElementById('FeesC3').value = "";

        document.getElementById('txtLessTax2').value = "";
        document.getElementById('ddlGSTReg').value = "blank";
        document.getElementById('txtFinalTotalWithHtx').value = "";
        document.getElementById('txtFinalTotalGST').value = ""
        document.getElementById('NoOfMH@Rate').value = rate
        document.getElementById('NoOfMeeting').innerHTML = 'No. of meeting hours';

        document.getElementById('tbeNoOfMH').style.visibility = "visible";
        document.getElementById('NoOfHr4Prep').style.visibility = "hidden";
        document.getElementById('NoOfHr4Report').style.visibility = "hidden";
        workSubtotal()
        findTotal()
        Row2totalValue()
        Row3totalValue()
        
        
    }
    if (C1 == 'CR-C')
    {
        rate = 650.00;
        rateC2 = 50.00;
        rateC3 = 80.00;
        
        document.getElementById('NoOfMH@Rate').value = ""
        document.getElementById('FeesC2NoOfMH@Rate').value = ""
        document.getElementById('FeesC3NoOfMH@Rate').value = ""
        workSubtotal()
        findTotal()
        Row2totalValue()
        Row3totalValue()

        document.getElementById('NoOfMeeting').style.visibility ="visible"
        document.getElementById('lblFeesC2b').style.visibility ="visible";
        document.getElementById('lblFeesC3b').style.visibility ="visible";

        document.getElementById('NoOfMH').style.visibility ="visible";
        document.getElementById('FeesC2').style.visibility ="visible";
        document.getElementById('FeesC3').style.visibility ="visible";

        document.getElementById('NoOfMH').value = "";
        document.getElementById('FeesC2').value = "";
        document.getElementById('FeesC3').value = "";

        document.getElementById('txtLessTax2').value = "";
        document.getElementById('ddlGSTReg').value = "blank";
        document.getElementById('txtFinalTotalWithHtx').value = "";
        document.getElementById('txtFinalTotalGST').value = "";
        document.getElementById('NoOfMH@Rate').value = rate.toFixed(2);
        document.getElementById('FeesC2NoOfMH@Rate').value = rateC2.toFixed(2);
        document.getElementById('FeesC3NoOfMH@Rate').value = rateC3.toFixed(2);
        document.getElementById('NoOfMeeting').innerHTML = 'Total No. of meeting days:';
        document.getElementById('lblFeesC2b').innerHTML = 'No. of hours for preparation:';
        document.getElementById('lblFeesC3b').innerHTML = 'No. of hours for reporting:';

        document.getElementById('tbeNoOfMH').style.visibility = "visible";
        document.getElementById('NoOfHr4Prep').style.visibility = "visible";
        document.getElementById('NoOfHr4Report').style.visibility = "visible";
        workSubtotal()
        findTotal()
        Row2totalValue()
        Row3totalValue()
        
    }     
}

function findTotal()
{
    var GetNum, rate, sum;
    GetNum = document.getElementById('NoOfMH').value
    rate= document.getElementById('NoOfMH@Rate').value
    sum = GetNum * rate;

    document.getElementById('NoOfMHMult').value = sum.toFixed(2);

    findTax();
    GetselectedGSTValue();
    workSubtotal();
    finMCMCCSubTotal();
    FinalClaimTotal();
    FinalPayOut()
    
}
function Row2totalValue()
{   
    var GetNum, rate, sum;
    GetNum = document.getElementById('FeesC2').value
    rate= document.getElementById('FeesC2NoOfMH@Rate').value
    sum = GetNum * rate;

    document.getElementById('lblFeesC2CNoOfMHMult').value = sum.toFixed(2);
    findTax();
    GetselectedGSTValue();
    workSubtotal();
    finMCMCCSubTotal();
    FinalClaimTotal();
    FinalPayOut()
}
function Row3totalValue()
{   
    var GetNum, rate, sum;
    GetNum = document.getElementById('FeesC3').value
    rate= document.getElementById('FeesC3NoOfMH@Rate').value
    sum = GetNum * rate;
    document.getElementById('lblFeesC3CNoOfMHMult').value = sum.toFixed(2);
    findTax();
    GetselectedGSTValue();
    workSubtotal();
    finMCMCCSubTotal();
    FinalClaimTotal();
    FinalPayOut()
}
function workSubtotal()
{
    var sel, val;
    val = 0;
    document.getElementById('sum1').value = val.toFixed(2);
    sel = document.getElementById('WType').value
    if (sel == 'MCM-CC' || sel == 'MCM-CM')
    {
        var arr = document.getElementsByClassName('Single');
        var tot = 0;
        for(var i=0;i<arr.length;i++){
            if(parseFloat(arr[i].value))
                tot += parseFloat(arr[i].value);
    }
    document.getElementById('sum1').value = tot.toFixed(2);
    findTax();
    GetselectedGSTValue();
    finMCMCCSubTotal();
    FinalClaimTotal();
    FinalPayOut()

    }
    if (sel == 'CR-C')
    {

        var arr = document.getElementsByClassName('Mutliple');
        var tot1 = 0;
        for(var i=0;i<arr.length;i++){
            if(parseFloat(arr[i].value))
                tot1 += parseFloat(arr[i].value);
    }
    document.getElementById('sum1').value = tot1.toFixed(2);
    findTax();
    GetselectedGSTValue();
    finMCMCCSubTotal();
    FinalClaimTotal();
    FinalPayOut()
    }



}
function GetselectedVType()
{
    var VType = document.getElementById('ddlVType').value
    var KMpY = document.getElementById('ddlKPY').value
    var rate = 0;
    if(VType == 'blank' || KMpY == 'blank')
    {
        rate = 0;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }

    if(VType == 'PetrolorDiesel' && KMpY == 'ddlKPYLess')
    {
        rate = 0.83;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }
    if(VType == 'PetrolorDiesel' && KMpY == 'ddlKPYGreater')
    {
        rate = 0.31;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }

    if(VType == 'PetrolHybrid' && KMpY == 'ddlKPYLess')
    {
        rate = 0.83;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }
    if(VType == 'PetrolHybrid' && KMpY == 'ddlKPYGreater')
    {
        rate = 0.18;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }

    if(VType == 'Electric' && KMpY == 'ddlKPYLess')
    {
        rate = 0.83;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }
    if(VType == 'Electric' && KMpY == 'ddlKPYGreater')
    {
        rate = 0.10;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }
    kmCosting();

}
function GetselectedVRate(ddlKPY)
{
    var VType = document.getElementById('ddlVType').value
    var KMpY = document.getElementById('ddlKPY').value
    var rate = 0;
    if(VType == 'blank' || KMpY == 'blank')
    {
        rate = 0;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }

    if(VType == 'PetrolorDiesel' && KMpY == 'ddlKPYLess')
    {
        rate = 0.83;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }
    if(VType == 'PetrolorDiesel' && KMpY == 'ddlKPYGreater')
    {
        rate = 0.31;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }

    if(VType == 'PetrolHybrid' && KMpY == 'ddlKPYLess')
    {
        rate = 0.83;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }
    if(VType == 'PetrolHybrid' && KMpY == 'ddlKPYGreater')
    {
        rate = 0.18;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }

    if(VType == 'Electric' && KMpY == 'ddlKPYLess')
    {
        rate = 0.83;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }
    if(VType == 'Electric' && KMpY == 'ddlKPYGreater')
    {
        rate = 0.10;
        document.getElementById('KPRRate').value = rate.toFixed(2)
    }
    kmCosting();

}

function kmCosting()
{
    var rate = document.getElementById('KPRRate').value
    var costing1, costing2, costing3, costing4, costing5, costing6, costing7;
    var calc1, calc2, calc3, calc4, calc5, calc6, calc7;
    costing1 = document.getElementById('txtTKM1').value
    costing2 = document.getElementById('txtTKM2').value
    costing3 = document.getElementById('txtTKM3').value
    costing4 = document.getElementById('txtTKM4').value
    costing5 = document.getElementById('txtTKM5').value
    costing6 = document.getElementById('txtTKM6').value
    costing7 = document.getElementById('txtTKM7').value

    calc1 = rate * costing1;
    calc2 = rate * costing2;
    calc3 = rate * costing3;
    calc4 = rate * costing4;
    calc5 = rate * costing5;
    calc6 = rate * costing6;
    calc7 = rate * costing7;

    document.getElementById('CurTravelTotal1').value = calc1.toFixed(2)
    document.getElementById('CurTravelTotal2').value = calc2.toFixed(2)
    document.getElementById('CurTravelTotal3').value = calc3.toFixed(2)
    document.getElementById('CurTravelTotal4').value = calc4.toFixed(2)
    document.getElementById('CurTravelTotal5').value = calc5.toFixed(2)
    document.getElementById('CurTravelTotal6').value = calc6.toFixed(2)
    document.getElementById('CurTravelTotal7').value = calc7.toFixed(2)

    kmCostingTotal();
}

function kmCostingTotal()
{
    var arr = document.getElementsByClassName('SubAdd');
    var tot = 0;
    for(var i=0;i<arr.length;i++){
        if(parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('KPRTotalRate').value = tot.toFixed(2);
    FinalClaimTotal();
    FinalPayOut();
}

function ExpReimCost()
{
    var arr = document.getElementsByClassName('ExpReim');
    var tot = 0;
    for(var i=0;i<arr.length;i++){
        if(parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('txtExpReimSubTotal').value = tot.toFixed(2); 
    FinalClaimTotal();  
    FinalPayOut();
}

function onclickImageBTNHide1()
{
    document.getElementById('imgClerBtn2').style.visibility = "hidden";
}

function onclickImageBTN1()
{
    var testUpLoad;
    testUpLoad = document.getElementById('myfileupLoad2').value
    if (testUpLoad == "")
    {
        document.getElementById('imgClerBtn2').style.visibility = "hidden";
    }
    else
    {
        document.getElementById('imgClerBtn2').style.visibility = "visible";
    }
}  

function onclickImageBTNHide()
{
    document.getElementById('imgClerBtn1').style.visibility = "hidden";
}
function onclickImageBTN()
{
    var testUpLoad;
    testUpLoad = document.getElementById('myfileupLoad1').value
    if (testUpLoad == "")
    {
        document.getElementById('imgClerBtn1').style.visibility = "hidden";
    }
    else
    {
        document.getElementById('imgClerBtn1').style.visibility = "visible";
    }
}
function btnOcClickRem1()
{
    var date;
    document.getElementById('btnAdd2').style.visibility = "visible";
    document.getElementById('RTravelAdd3').style.visibility ="hidden" 
    document.getElementById('btnAdd2java').style.visibility = "visible" 
    kmCosting();

}
function btnOcClickRem2()
{
    var date;
    document.getElementById('btnAdd1').style.visibility = "visible";
    document.getElementById('RTravelAdd2').style.visibility ="hidden"  
    document.getElementById('btnAdd2java').style.visibility = "hidden"
    document.getElementById('btnAdd2').style.visibility = "hidden"; 
    kmCosting();

}
function btnOcClickAddRW1()
{
    document.getElementById('btnAdd1').style.visibility = "hidden";
    document.getElementById('RTravelAdd2').style.visibility = "visible";
    document.getElementById('btnAdd2').style.visibility = "visible";
    document.getElementById('btnAdd2java').style.visibility = "visible"

}
function btnOcClickAddRW2()
{
    document.getElementById('btnAdd2').style.visibility = "hidden";
    document.getElementById('RTravelAdd3').style.visibility = "visible";
    document.getElementById('btnAdd2java').style.visibility = "hidden"
    
}
function loader()
{
    GetselectedTable()
}

function finMCMCCSubTotal()
{
    var Sub, Tax, GST, SubTotal;
    Sub = document.getElementById("sum1").value
    Tax = document.getElementById("LessTax").value
    GST = document.getElementById("GSTTotal").value
    GST = GST * -1;
    var ConfSubTotal = 0;
    SubTotal = Sub - Tax - GST;
    document.getElementById("MCM-CC-SubTotal").value = SubTotal.toFixed(2);

}

function GetselectedGSTValue(ddlGSTReg)
{
    var GST = document.getElementById('ddlGSTReg').value
    var Sub = document.getElementById('sum1').value
    var GstTot = 0;
    if (GST == 'YesGST')
    {
        GstTot = (Sub * 0.15).toFixed(2)
        document.getElementById('GSTTotal').value = GstTot;
        document.getElementById('txtFinalTotalGST').value = GstTot;
        finMCMCCSubTotal();
        FinalPayOut()
    }
    if (GST == "NOGST")
    {
        GstTot = 0.00;
        document.getElementById('GSTTotal').value = GstTot.toFixed(2);
        document.getElementById('txtFinalTotalGST').value = GstTot;
        finMCMCCSubTotal();
        FinalPayOut()
    }
    if (GST == "blank")
    {
        GstTot = 0.00;
        document.getElementById('GSTTotal').value = GstTot.toFixed(2);
        document.getElementById('txtFinalTotalGST').value = GstTot.toFixed(2);
        finMCMCCSubTotal();
        FinalPayOut()
    }

}

function findTax()
{
    var Tax = document.getElementById('txtLessTax2').value
    var Sub = document.getElementById('sum1').value
    var LessTax;
    var TaxPer;
    LessTax = ((Tax/100) * Sub).toFixed(2)
    TaxPer = Tax + "%"

    document.getElementById('LessTax').value = LessTax;
    document.getElementById('txtFinalTotalWithHtx').value = LessTax
    finMCMCCSubTotal();
    FinalPayOut()
    
}

function FinalClaimTotal()
{
    var arr = document.getElementsByClassName('FinalClaimTotal');
    var tot = 0;
    for(var i=0;i<arr.length;i++){
        if(parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('txtFinalTotalClaim').value = tot.toFixed(2);
}
function FinalPayOut()
{
    var TClaim, WTax, TotalGst, total, calGst;
    TClaim = document.getElementById('txtFinalTotalClaim').value
    WTax = document.getElementById('txtFinalTotalWithHtx').value
    TotalGst = document.getElementById('txtFinalTotalGST').value
    calGst = TotalGst *-1;
    total = TClaim - WTax;
    total = total - calGst;
    document.getElementById('txtFinalTotalPayment').value = total.toFixed(2);    
}


