(function () {
    var form = document.getElementById("card-form");
    var clear = document.getElementById("clear");
    Worldpay.checkout.init(
      {
        id: "MerchantID",
        form: "#card-form",
        fields: {
          pan: {
            selector: "#card-pan",
            placeholder: "4444333322221111"
          },
          cvv: {
            selector: "#card-cvv",
            placeholder: "123"
          },
          expiry: {
            selector: "#card-expiry",
            placeholder: "MM/YY"
          }
        },
        styles: {
          "input": {
            "color": "black",
            "font-weight": "bold",
            "font-size": "20px",
            "letter-spacing": "3px"
          },
          "input#pan": {
            "font-size": "24px"
          },
          "input.is-valid": {
            "color": "green"
          },
          "input.is-invalid": {
            "color": "red"
          },
          "input.is-onfocus": {
            "color": "black"
          }
        },
        accessibility: {
          ariaLabel: {
            pan: "my custom aria label for pan input",
            expiry: "my custom aria label for expiry input",
            cvv: "my custom aria label for cvv input"
          },
          lang: {
            locale: "en-GB"
          },
          title: {
            enabled: true,
            pan: "my custom title for pan",
            expiry: "my custom title for expiry date",
            cvv: "my custom title for security code"
          }
        },
        acceptedCardBrands: ["amex", "diners", "discover", "jcb", "maestro", "mastercard", "visa"]
      },
      function (error, checkout) {
        if (error) {
          console.error(error);
          return;
        }

        form.addEventListener("submit", function (event) {
          event.preventDefault();

          checkout.generateSessionState(function (error, sessionState) {
            if (error) {
              console.error(error);
              return;
            }
            
            // session state for card details
            alert(sessionState);
          });
        });

        clear.addEventListener("click", function(event) {
          event.preventDefault();
          checkout.clearForm(function() {
            // trigger desired behaviour on cleared form
            console.log('Form successfully cleared');
          });
        });
      }
    );
  })();
