    function sprawdz(){
      var imie      = document.forms['formularz'].imie.value;
      var nazwisko  = document.forms['formularz'].nazwisko.value;
      var wiek      = document.forms['formularz'].wiek.value;
      var plec      = document.forms['formularz'].plec.value;
      var haslo1    = document.forms['formularz'].password1.value;
      var haslo2    = document.forms['formularz'].password2.value;
      var gracz     = document.forms['formularz'].gracz.value;
      var zgoda     = document.forms['formularz'].zgoda;
      var x         = document.forms['formularz'].x.value;
      var y         = document.forms['formularz'].y.value;
      var z         = document.forms['formularz'].z.value;
      var tekst     = document.forms['formularz'].tekst.value;

      var odpowiedz = document.getElementById('wyniki');

      odpowiedz.innerHTML = "";
      if (
          (imie=='')        ||
          (nazwisko=='')    ||
          (wiek=='')        ||
          (plec=='')        ||
          (haslo1=='')      ||
          (haslo2=='')      ||
          (gracz=='')       ||
          (!zgoda.checked)  ||
          (x=='')           ||
          (y=='')           ||
          (z=='')           ||
          (tekst=='')
        )
        {
          odpowiedz.innerHTML = "Nie wypełniono wszystkich pol!";
          alert('ALERT:Nie wypełniono wszystkich pol!');
        }
      else {
        odpowiedz.innerHTML += "Wprowadzone dane:<br>";
        odpowiedz.innerHTML += "Imie: "     + imie +        "<br>";
        odpowiedz.innerHTML += "Nazwisko: " + nazwisko +    "<br>";
        odpowiedz.innerHTML += "Wiek: "     + wiek +        "<br>";
        odpowiedz.innerHTML += "Płeć: "     + plec +        "<br>";
        odpowiedz.innerHTML += "Hasło1: "   + haslo1 +      "<br>";
        odpowiedz.innerHTML += "Hasło2: "   + haslo2 +      "<br>";
        odpowiedz.innerHTML += "Gracz: "    + gracz +       "<br>";
        odpowiedz.innerHTML += "Zgoda: "    + zgoda.value + "<br>";
        odpowiedz.innerHTML += "X: "        + x +           "<br>";
        odpowiedz.innerHTML += "Y: "        + y +           "<br>";
        odpowiedz.innerHTML += "Z: "        + z +           "<br>";
        odpowiedz.innerHTML += "Tekst: "    + tekst +       "<br>";
        alert('Wszystkie pola są wypełnione');
        if (isNaN(x))       odpowiedz.innerHTML += "X nie jest liczbą!<br>";
        if (isNaN(y))       odpowiedz.innerHTML += "Y nie jest liczbą!<br>";
        if (isNaN(z))       odpowiedz.innerHTML += "Z nie jest liczbą!<br>";
        if (isNaN(wiek))    odpowiedz.innerHTML += "WIEK nie jest liczbą!<br>";
        if (haslo1!=haslo2) odpowiedz.innerHTML += "<br>Twoje hasła się roznia!<br>";

        if (x < y)      {odpowiedz.innerHTML += "X jest mniejsze od Y<br>"}
        else if (x > y) {odpowiedz.innerHTML += "X jest większe od Y<br>"}
             else       {odpowiedz.innerHTML += "X jest rowne Y<br>"};}

      }
    
