

function lastWeek()
{
var pastWeekArray=[0,0,0,0,0,0,0];

todayInfo= new Date();
yearToday=todayInfo.getFullYear()
dayToday=todayInfo.getDay()
monthToday=todayInfo.getMonth()
dateToday=todayInfo.getDate();
lastMonth=monthToday-1
daysLastMonth=31

if (monthToday == 4 || monthToday == 6 || monthToday == 9 || monthToday == 12)
{
  daysLastMonth = 30
}

if (monthToday==2)
{
  daysLastMonth=28
}

if (monthToday==2 && yearToday%4 ==0)
{
  daysLastMonth=29
}
xDayWeek=[dayToday-6,dayToday-5,dayToday-4,dayToday-3,dayToday-2,dayToday-1,dayToday];
xDates=[dateToday-6,dateToday-5,dateToday-4,dateToday-3,dateToday-2,dateToday-1,dateToday]
xMonths=[monthToday,monthToday,monthToday,monthToday,monthToday,monthToday,monthToday]
xLabels=[]
for (i = 0; i < xDayWeek.length; i++)
{

if(xDayWeek[i]<0)
{ xDayWeek[i]+=7; }

if(xDates[i]==0)
{xDates[i]=daysLastMonth; xMonths[i]=monthToday-1;}

if(xDates[i]==-1)
{xDates[i]=daysLastMonth-1; xMonths[i]=monthToday-1;}

if(xDates[i]==-2)
{xDates[i]=daysLastMonth-2; xMonths[i]=monthToday-1;}

if(xDates[i]==-3)
{xDates[i]=daysLastMonth-3; xMonths[i]=monthToday-1;}

if(xDates[i]==-4)
{xDates[i]=daysLastMonth-4; xMonths[i]=monthToday-1;}

if(xDates[i]==-5)
{xDates[i]=daysLastMonth-5; xMonths[i]=monthToday-1;}



if (xDayWeek[i]==6)
{xDayWeek[i]='Saturday';}

if (xDayWeek[i]==5)
{xDayWeek[i]='Friday ';}

if (xDayWeek[i]==4)
{xDayWeek[i]='Thursday';}

if (xDayWeek[i]==3)
{xDayWeek[i]='Wednesday';}

if (xDayWeek[i]==2)
{xDayWeek[i]='Tuesday';}

if (xDayWeek[i]==1)
{xDayWeek[i]='Monday';}

if (xDayWeek[i]==0)
{xDayWeek[i]='Sunday';}

xLabels[i]=xDayWeek[i]+' ('+(xMonths[i]+1)+' - '+xDates[i]+')';
}
pastWeekArray=xLabels;
return pastWeekArray;
}

var myArray=lastWeek()
