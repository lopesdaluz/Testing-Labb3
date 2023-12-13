Given beskriver sammanhanget i början på scenariot. Ett eller flera förutsättningar (preconditions) för testet. Det får finnas flera Given-klausuler i ett scenario.
When är en händelse som sätter ett scenario i rörelse. Detta kan vara att en användare eller ett annat system gör någonting. Det får endast finnas en When-klausul i ett scenario.
Then beskriver det förväntade resultatet. Det får finnas flera Then-klausuler i ett scenario.

Feature: Rullgardin

Scenario: Ett första klick
Given: Jag är på hemsidan och ser en rullgardinsmeny där man kan välja gender
when: Jag klickar på rullgardinmenyn
Then: Menyn visar alternativ 

scenario: Andra klick
Given: Jag står i rullgardinmenyn
when: väljer ett av alternativen (male)
then: alternativen highlightas