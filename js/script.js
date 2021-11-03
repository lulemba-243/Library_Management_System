// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
const l1 = document.querySelector('.p1');
const l2 = document.querySelector('.p2');
const l3 = document.querySelector('.p3');
const l4 = document.querySelector('.p4');
const l5 = document.querySelector('.p5');
const l6 = document.querySelector('.p6');
const l7 = document.querySelector('.p7');
const l8 = document.querySelector('.p8');
const l9 = document.querySelector('.p9');
const l10 = document.querySelector('.p10');

const p1 = document.querySelector('.main__cards');
const p2 = document.querySelector('.main__cards1');
const p3 = document.querySelector('.main__cards2');
const p4 = document.querySelector('.main__cards3');
const p5 = document.querySelector('.main__cards4');
const p6 = document.querySelector('.main__cards5');
const p7 = document.querySelector('.main__cards6');
const p8 = document.querySelector('.main__cards7');
const p9 = document.querySelector('.main__cards8');
const p10 = document.querySelector('.main__cards9');

l1.onclick = () => {
  p1.style.display = 'flex';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';
}

l2.onclick = () => {
  p1.style.display = 'none';
  p2.style.display = 'block';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';
}

l3.onclick = () => {
  p1.style.display = 'none';
  p2.style.display = 'none';
  p3.style.display = 'block';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';
}

l4.onclick = () => {
  p1.style.display = 'none';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'block';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';
}

l5.onclick = () => {
  p1.style.display = 'none';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'block';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';
}

l6.onclick = () => {
  p1.style.display = 'none';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'block';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';
}

l7.onclick = () => {
  p1.style.display = 'none';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'block';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'none';
}

l8.onclick = () => {
  p1.style.display = 'none';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'block';
  p9.style.display = 'none';
  p10.style.display = 'none';
}

l9.onclick = () => {
  p1.style.display = 'none';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'block';
  p10.style.display = 'none';
}

l10.onclick = () => {
  p1.style.display = 'none';
  p2.style.display = 'none';
  p3.style.display = 'none';
  p4.style.display = 'none';
  p5.style.display = 'none';
  p6.style.display = 'none';
  p7.style.display = 'none';
  p8.style.display = 'none';
  p9.style.display = 'none';
  p10.style.display = 'block';
}





var options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: "bar",
    height: 250, // make this 250
    sparkline: {
      enabled: true, // make this true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#apex1"), options);
chart.render();

// Sidebar Toggle Codes;

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
var sidebarCloseIcon = document.getElementById("sidebarIcon");

function toggleSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar_responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar_responsive");
    sidebarOpen = false;
  }
}


