
let list = document.querySelectorAll(".list");

let product = document.getElementById("product");
let company = document.getElementById("company");
let connect = document.getElementById("connect");

let productimg = document.getElementById("productimg");
let companyimg = document.getElementById("companyimg");
let connectimg = document.getElementById("connectimg");

let ulproduct = document.getElementById("ulproduct");
let ulcompany = document.getElementById("ulcompany");
let ulconnect = document.getElementById("ulconnect");

let ulproductli = document.querySelectorAll(".ulproduct li");
let ulcompanyli = document.querySelectorAll(".ulcompany li");
let ulconnectli = document.querySelectorAll(".ulconnect li");

let liContact1 = document.getElementById("Contact1");
let liNewsletter1 = document.getElementById("Newsletter1");
let liLinkedIn1 = document.getElementById("LinkedIn1");

let liContact2 = document.getElementById("Contact2");
let liNewsletter2 = document.getElementById("Newsletter2");
let liLinkedIn2 = document.getElementById("LinkedIn2");

let liContact3 = document.getElementById("Contact3");
let liNewsletter3 = document.getElementById("Newsletter3");
let liLinkedIn3 = document.getElementById("LinkedIn3");

let listproduct = document.querySelector(".listproduct");
let listcompany = document.querySelector(".listcompany");
let listconnect = document.querySelector(".listconnect");

let openA = document.querySelector(".open");
let hamimg = document.getElementById("hamimg");
let closeimg = document.getElementById("closeimg");

let mobileList = document.getElementById("mobilelist");
let div = document.createElement("div");
let hr = document.createElement("hr");
let headerBody = document.getElementById("headerbody");
let login = document.querySelector(".login");
let loginfirst = document.getElementById("loginfirst");
let loginlast = document.getElementById("loginlast");

list.forEach(function (el) {

    el.addEventListener("mouseover", function () {
        if (el == product) {

            productimg.style.transform = "rotateZ(180deg)";
            ulproduct.style.display = "block";

            ulproductli.forEach(function (eil) {
                eil.addEventListener("mouseover", function () {
                    if (eil == liContact1) {
                        liContact1.style.fontWeight = "bold";
                    };

                    if (eil == liNewsletter1) {
                        liNewsletter1.style.fontWeight = "bold";
                    };

                    if (eil == liLinkedIn1) {
                        liLinkedIn1.style.fontWeight = "bold";
                    };
                });
            });
        };

        if (el == company) {
            companyimg.style.transform = "rotateZ(180deg)";
            ulcompany.style.display = "block";

            ulcompanyli.forEach(function (eil) {
                eil.addEventListener("mouseover", function () {
                    if (eil == liContact2) {
                        liContact2.style.fontWeight = "bold";
                    };

                    if (eil == liNewsletter2) {
                        liNewsletter2.style.fontWeight = "bold";
                    };

                    if (eil == liLinkedIn2) {
                        liLinkedIn2.style.fontWeight = "bold";
                    };
                });
            });
        };

        if (el == connect) {

            connectimg.style.transform = "rotateZ(180deg)";
            ulconnect.style.display = "block";

            ulconnectli.forEach(function (eil) {
                eil.addEventListener("mouseover", function () {
                    if (eil == liContact3) {
                        liContact3.style.fontWeight = "bold";
                    };

                    if (eil == liNewsletter3) {
                        liNewsletter3.style.fontWeight = "bold";
                    };

                    if (eil == liLinkedIn3) {
                        liLinkedIn3.style.fontWeight = "bold";
                    };
                });
            });
        };
    });

    el.addEventListener("mouseleave", function () {
        if (el == product) {

            ulproductli.forEach(function (eil) {
                eil.addEventListener("mouseleave", function () {
                    if (eil == liContact1) {
                        liContact1.style.fontWeight = "normal";
                    };

                    if (eil == liNewsletter1) {
                        liNewsletter1.style.fontWeight = "normal";
                    };

                    if (eil == liLinkedIn1) {
                        liLinkedIn1.style.fontWeight = "normal";
                    };
                });
            });

            ulproduct.addEventListener("mouseleave", function () {
                ulproduct.style.display = "none";
            });
                
            listproduct.addEventListener("mouseleave", function () {
                ulproduct.style.display = "none";
            });

            productimg.style.transform = "rotateZ(0deg)";
        };

        if (el == company) {

            ulcompanyli.forEach(function (eil) {
                eil.addEventListener("mouseleave", function () {
                    if (eil == liContact2) {
                        liContact2.style.fontWeight = "normal";
                    };

                    if (eil == liNewsletter2) {
                        liNewsletter2.style.fontWeight = "normal";
                    };

                    if (eil == liLinkedIn2) {
                        liLinkedIn2.style.fontWeight = "normal";
                    };
                });
            });

            ulcompany.addEventListener("mouseleave", function () {
                ulcompany.style.display = "none";
            });
                
            listcompany.addEventListener("mouseleave", function () {
                ulcompany.style.display = "none";
            });

            companyimg.style.transform = "rotateZ(0deg)";
        };

        if (el == connect) {
            ulconnectli.forEach(function (eil) {
                eil.addEventListener("mouseleave", function () {
                    if (eil == liContact3) {
                        liContact3.style.fontWeight = "normal";
                    };

                    if (eil == liNewsletter3) {
                        liNewsletter3.style.fontWeight = "normal";
                    };

                    if (eil == liLinkedIn3) {
                        liLinkedIn3.style.fontWeight = "normal";
                    };
                });
            });

            ulconnect.addEventListener("mouseleave", function () {
                ulconnect.style.display = "none";
            });
                
            listconnect.addEventListener("mouseleave", function () {
                ulconnect.style.display = "none";
            });

            connectimg.style.transform = "rotateZ(0deg)";
        };
    });
});

/* Start The Responsive */

hamimg.addEventListener("click", function () {
    hamimg.style.display = "none";
    closeimg.style.display = "block";
    headerBody.style.display = "none";
    mobileList.style.display = "flex";
    mobileList.style.justifyContent = "space-between";
    mobileList.style.alignItems = "center";

    mobileList.appendChild(div);
    
    div.appendChild(product);
    div.appendChild(company);
    div.appendChild(connect);
    product.style.margin = "20px";
    company.style.margin = "20px";
    connect.style.margin = "20px";

    mobileList.appendChild(hr);
    hr.style.margin = "0";
    hr.style.width = "250px";
    hr.style.height = "1px";
    hr.style.backgroundColor = "hsl(240, 2%, 79%)";
    hr.style.border = "none";
    hr.style.position = "relative";
    hr.style.top = "40px";

    loginfirst.style.color = "hsl(208, 49%, 24%)";
    loginfirst.style.margin = "0";
    loginfirst.style.fontSize = "19px";
    loginfirst.style.fontWeight = "bold";
    loginfirst.style.position = "relative";
    loginfirst.style.top = "-45px";

    loginlast.style.margin = "0";
    loginlast.style.fontSize = "17px";
    loginlast.style.color = "hsl(0, 0%, 100%)";
    loginlast.style.backgroundImage = "linear-gradient(to left, hsla(353, 100%, 62%), hsl(13, 100%, 72%))";
    loginlast.style.position = "relative";
    loginlast.style.top = "-20px";

    productimg.src = "./images/icon-arrow-dark.svg";
    companyimg.src = "./images/icon-arrow-dark.svg";
    connectimg.src = "./images/icon-arrow-dark.svg";

    login.style.display = "flex";

    mobileList.appendChild(login);

    product.addEventListener("mouseover", function () {

        ulcompany.style.display = "none";
        ulconnect.style.display = "none";
        product.appendChild(ulproduct);
        ulproduct.appendChild(liContact1);
        ulproduct.appendChild(liNewsletter1);
        ulproduct.appendChild(liLinkedIn1);
        ulproduct.style.display = "flex";
        ulproduct.style.position = "absolute";
        ulproduct.style.top = "20px";
        ulproduct.style.left = "-80px";
        ulproduct.style.width = "250px";
        ulproduct.style.margin = "0";
        ulproduct.style.padding = "0";
        ulproduct.style.flexDirection = "column";
        ulproduct.style.alignItems = "center";
        ulproduct.style.justifyContent = "center";
        ulproduct.style.backgroundColor = "hsl(240, 2%, 79%)";

        product.style.position = "relative";
        product.style.top = "0";

        company.style.position = "relative";
        company.style.top = "130px";

        connect.style.position = "relative";
        connect.style.top = "130px";

        ulproductli.forEach(function (l) {
            l.addEventListener("mouseover", function () {
                if (l == liContact1) {
                    liContact1.style.fontWeight = "bold";
                };

                if (l == liNewsletter1) {
                    liNewsletter1.style.fontWeight = "bold";
                };

                if (l == liLinkedIn1) {
                    liLinkedIn1.style.fontWeight = "bold";
                };
            });
        });
        
        ulproductli.forEach(function (l) {
            l.addEventListener("mouseleave", function () {
                if (l == liContact1) {
                    liContact1.style.fontWeight = "normal";
                };

                if (l == liNewsletter1) {
                    liNewsletter1.style.fontWeight = "normal";
                };

                if (l == liLinkedIn1) {
                    liLinkedIn1.style.fontWeight = "normal";
                };
            });
        });
    });

    product.addEventListener("mouseleave", function () {
        ulproduct.style.display = "none";

        product.style.position = "relative";
        product.style.top = "0";

        company.style.position = "relative";
        company.style.top = "0";

        connect.style.position = "relative";
        connect.style.top = "0";
    });

    company.addEventListener("mouseover", function () {

        ulproduct.style.display = "none";
        ulconnect.style.display = "none";
        company.appendChild(ulcompany);
        ulcompany.appendChild(liContact2);
        ulcompany.appendChild(liNewsletter2);
        ulcompany.appendChild(liLinkedIn2);
        ulcompany.style.display = "flex";
        ulcompany.style.position = "absolute";
        ulcompany.style.top = "20px";

        ulcompany.style.left = "-80px";
        ulcompany.style.width = "250px";
        ulcompany.style.margin = "0";
        ulcompany.style.padding = "0";
        ulcompany.style.flexDirection = "column";
        ulcompany.style.alignItems = "center";
        ulcompany.style.justifyContent = "center";

        ulcompany.style.backgroundColor = "hsl(240, 2%, 79%)";

        product.style.position = "relative";
        product.style.top = "0";

        company.style.position = "relative";
        company.style.top = "0";

        connect.style.position = "relative";
        connect.style.top = "130px";

        ulcompanyli.forEach(function (l) {
            l.addEventListener("mouseover", function () {
                if (l == liContact2) {
                    liContact2.style.fontWeight = "bold";
                };

                if (l == liNewsletter2) {
                    liNewsletter2.style.fontWeight = "bold";
                };

                if (l == liLinkedIn2) {
                    liLinkedIn2.style.fontWeight = "bold";
                };
            });
        });
        
        ulcompanyli.forEach(function (l) {
            l.addEventListener("mouseleave", function () {
                if (l == liContact2) {
                    liContact2.style.fontWeight = "normal";
                };

                if (l == liNewsletter2) {
                    liNewsletter2.style.fontWeight = "normal";
                };

                if (l == liLinkedIn2) {
                    liLinkedIn2.style.fontWeight = "normal";
                };
            });
        });
    });

    company.addEventListener("mouseleave", function () {

        ulcompany.style.display = "none";

        product.style.position = "relative";
        product.style.top = "0";

        company.style.position = "relative";
        company.style.top = "0";

        connect.style.position = "relative";
        connect.style.top = "0";
    });

    connect.addEventListener("mouseover", function () {

        ulproduct.style.display = "none";
        ulcompany.style.display = "none";
        connect.appendChild(ulconnect);
        ulconnect.appendChild(liContact3);
        ulconnect.appendChild(liNewsletter3);
        ulconnect.appendChild(liLinkedIn3);
        ulconnect.style.display = "flex";
        ulconnect.style.position = "absolute";
        ulconnect.style.top = "20px";
        ulconnect.style.left = "-80px";
        ulconnect.style.width = "250px";
        ulconnect.style.margin = "0";
        ulconnect.style.padding = "0";
        ulconnect.style.flexDirection = "column";
        ulconnect.style.alignItems = "center";
        ulconnect.style.justifyContent = "center";
        
        ulconnect.style.backgroundColor = "hsl(240, 2%, 79%)";

        product.style.position = "relative";
        product.style.top = "0";

        company.style.position = "relative";
        company.style.top = "0";

        connect.style.position = "relative";
        connect.style.top = "0";

        ulconnectli.forEach(function (l) {
            l.addEventListener("mouseover", function () {
                if (l == liContact3) {
                    liContact3.style.fontWeight = "bold";
                };

                if (l == liNewsletter3) {
                    liNewsletter3.style.fontWeight = "bold";
                };

                if (l == liLinkedIn3) {
                    liLinkedIn3.style.fontWeight = "bold";
                };
            });
        });
        
        ulconnectli.forEach(function (l) {
            l.addEventListener("mouseleave", function () {
                if (l == liContact3) {
                    liContact3.style.fontWeight = "normal";
                };

                if (l == liNewsletter3) {
                    liNewsletter3.style.fontWeight = "normal";
                };

                if (l == liLinkedIn3) {
                    liLinkedIn3.style.fontWeight = "normal";
                };
            });
        });
    });

    connect.addEventListener("mouseleave", function () {

        ulconnect.style.display = "none";

        product.style.position = "relative";
        product.style.top = "0";

        company.style.position = "relative";
        company.style.top = "0";

        connect.style.position = "relative";
        connect.style.top = "0";
    });
});

closeimg.addEventListener("click", function () {
    hamimg.style.display = "block";
    closeimg.style.display = "none";
    mobileList.style.display = "none";
    headerBody.style.display = "flex";
});

/* End The Responsive */