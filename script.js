
// Monthly Revenue Data
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const revenueData = [
    50000, 75000, 60000, 90000, 85000, 120000,
    95000, 110000, 130000, 100000, 140000, 160000
];

// Create Revenue Chart
const revenueChart = new Chart(
    document.getElementById("revenueChart"),
    {
        type: "bar",
        data: {
            labels: months.slice(0, 6),
            datasets: [{
                label: "Revenue (₹)",
                data: revenueData.slice(0, 6),
                backgroundColor: "#3b82f6",
                borderRadius: 6
            }]
        },
        options: {
            responsive: true
        }
    }
);

// Update Chart According to Selected Period
function updateDashboard() {

    const period = Number(
        document.getElementById("period").value
    );

    revenueChart.data.labels = months.slice(-period);
    revenueChart.data.datasets[0].data =
        revenueData.slice(-period);

    revenueChart.update();
}

// Sales Category Chart
const sales = document.getElementById("salesChart");

new Chart(sales, {
    type: "doughnut",
    data: {
        labels: [
            "Electronics",
            "Clothing",
            "Furniture",
            "Others"
        ],
        datasets: [{
            data: [40, 25, 20, 15],
            backgroundColor: [
                "#2563eb",
                "#16a34a",
                "#f59e0b",
                "#a855f7"
            ]
        }]
    },
    options: {
        responsive: true
    }
});

function downloadReport() {

    const reportData = [
        ["Customer", "Product", "Amount", "Status"],
        ["Rahul Sharma", "Laptop", 55000, "Completed"],
        ["Priya Patel", "Mobile", 25000, "Completed"],
        ["Amit Kumar", "Headphones", 3000, "Pending"]
    ];

    const csvContent = reportData
        .map(row => row.join(","))
        .join("\n");

    const file = new Blob(
        [csvContent],
        { type: "text/csv;charset=utf-8;" }
    );

    const link = document.createElement("a");

    const url = URL.createObjectURL(file);

    link.href = url;
    link.download = "BizInsight_Report.csv";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Customer Growth Chart

// Customer Analytics Charts

function createCustomerCharts() {

    const growthCanvas = document.getElementById(
        "customerGrowthChart"
    );

    const segmentCanvas = document.getElementById(
        "customerSegmentChart"
    );

    // Customer Growth Chart
    if (growthCanvas && !Chart.getChart(growthCanvas)) {

        new Chart(growthCanvas, {
            type: "line",

            data: {
                labels: [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun"
                ],

                datasets: [{
                    label: "New Customers",
                    data: [50, 65, 80, 75, 100, 120],

                    borderColor: "#2563eb",
                    backgroundColor: "rgba(37, 99, 235, 0.15)",

                    fill: true,
                    tension: 0.4,
                    borderWidth: 3
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        display: true
                    }
                },

                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Customer Segmentation Chart
    if (segmentCanvas && !Chart.getChart(segmentCanvas)) {

        new Chart(segmentCanvas, {
            type: "doughnut",

            data: {
                labels: [
                    "New Customers",
                    "Returning Customers",
                    "Regular Customers"
                ],

                datasets: [{
                    data: [30, 45, 25],

                    backgroundColor: [
                        "#3b82f6",
                        "#16a34a",
                        "#f59e0b"
                    ],

                    borderWidth: 2
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        position: "bottom"
                    }
                }
            }
        });
    }
}

createCustomerCharts();

// PRODUCT ANALYTICS

// Top-Selling Products Chart

const topProducts = document.getElementById(
    "topProductsChart"
);

new Chart(topProducts, {

    type: "bar",

    data: {

        labels: [
            "Laptop",
            "Mobile",
            "Headphones",
            "Keyboard"
        ],

        datasets: [{
            label: "Units Sold",

            data: [120, 200, 150, 90],

            backgroundColor: [
                "#2563eb",
                "#16a34a",
                "#f59e0b",
                "#a855f7"
            ],

            borderRadius: 6
        }]
    },

    options: {

        indexAxis: "y",

        responsive: true,

        maintainAspectRatio: false,

        scales: {
            x: {
                beginAtZero: true
            }
        }
    }

});


// Product Revenue Chart

const productRevenue = document.getElementById(
    "productRevenueChart"
);

new Chart(productRevenue, {

    type: "doughnut",

    data: {

        labels: [
            "Laptop",
            "Mobile",
            "Headphones",
            "Keyboard"
        ],

        datasets: [{

            data: [
                660000,
                500000,
                450000,
                90000
            ],

            backgroundColor: [
                "#2563eb",
                "#16a34a",
                "#f59e0b",
                "#a855f7"
            ]

        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: "bottom"
            }
        }
    }

});

