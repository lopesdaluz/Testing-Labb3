Feature: kortmeny

//beskirivande för alla scenario jag har i filen-userstory//
Given beskriver sammanhanget i början på scenariot. Ett eller flera förutsättningar (preconditions) för testet. Det får finnas flera Given-klausuler i ett scenario.
When är en händelse som sätter ett scenario i rörelse. Detta kan vara att en användare eller ett annat system gör någonting. Det får endast finnas en When-klausul i ett scenario.
Then beskriver det förväntade resultatet. Det får finnas flera Then-klausuler i ett scenario.

  Scenario: Kort-klick
  Given Jag är på hemsidan och ser en meny av kort
  When Jag klickar på ett kort
  Then Man hamnar på en ny sida med produkter

  
Scenario: hamburgarmeny klick
  Given Det finns en hamburgar meny
  When Jag klickar på den
  Then Menyn visar alternativ





