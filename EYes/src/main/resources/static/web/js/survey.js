Survey.StylesManager.applyTheme("modern");

var surveyJSON = {"locale":"es","title":{"es":"Perfil de Inversion"},"logo":{"es":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/" +
            "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"},"logoFit":"none","logoPosition":"right","completedHtml":{"es":"<h3>Concluye el cuestionario</h3>\n<h5>Resultados:</h5>\n<p>total</p>\np"},"completedHtmlOnCondition":[{"expression":"{question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}<11","html":{"es":"<h1>Preservación de Capital</h1>"}},{"expression":"{question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}> 12 and {question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}< 21","html":{"es":"<h1>Conservador</h1>"}},{"expression":"{question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}>22 and {question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}<33","html":{"es":"<h1>Moderado</h1>"}},{"expression":"{question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}>34 and {question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}<44","html":{"es":"<h1>Moderado-Agresivo</h1>"}},{"expression":"{question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}>45 and {question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}<54","html":{"es":"<h1>Agresivo</h1>"}},{"expression":"{question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}>55 and {question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}<64","html":{"es":"<h1>Especulativo</h1>"}}],"pages":[{"name":"page1","elements":[{"type":"radiogroup","name":"question1","indent":1,"title":{"es":"Edad"},"isRequired":true,"choices":[{"value":"3","text":{"es":"a.  Menos de 40 años"}},{"value":"2","text":{"es":"b.  Entre 40 y 65 años"}},{"value":"1","text":{"es":"c.  Entre 65 y 80 años"}},{"value":"0","text":{"es":"d. Más de 80 años(Si usted marca esta opción, el resultado de su perfil no podrá ser mayor a 4)"}}]}],"title":{"es":"Cuestionario perfil del inversionista"},"description":{"es":"Elija solo una opcion"}},{"name":"page2","elements":[{"type":"radiogroup","name":"question2","title":{"es":"¿Qué porcentaje de su patrimonio liquido representa el monto que desea invertir con nosotros?"},"isRequired":true,"choices":[{"value":"7","text":{"es":"a. Entre el 50% y el 75%"}},{"value":"5","text":{"es":"b. Menos del 50%"}},{"value":"2","text":{"es":"c. Mas del 75%"}}]}]},{"name":"page3","elements":[{"type":"radiogroup","name":"question3","title":{"es":"¿Cómo describe su expectativa de ingresos en los próximos 5 años?"},"isRequired":true,"choices":[{"value":"2","text":{"es":"a. Mis ingresos deben aumentar"}},{"value":"1","text":{"es":"b. Mis ingresos deben mantenerse estables"}},{"value":"0","text":{"es":"c. Mis ingresos deben disminuir"}}]}]},{"name":"page4","elements":[{"type":"radiogroup","name":"question4","title":{"es":"¿Además del monto que pretende invertir con nosotros, cuenta usted con un fondo de reservas adicionales que le permitan ante una eventual emergencia cubrir sus gasto totales durante 6 meses"},"isRequired":true,"choices":[{"value":"2","text":{"es":"a. Si"}},{"value":"1","text":{"es":"b. No"}}]}]},{"name":"page5","elements":[{"type":"radiogroup","name":"question5","title":{"es":"¿Por cuánto tiempo espera mantener sus inversiones?"},"isRequired":true,"choices":[{"value":"11","text":{"es":"a. Más de 5 años."}},{"value":"8","text":{"es":"b. Entre 3 y 5 años."}},{"value":"6","text":{"es":"c. Entre 1 y 3 años."}},{"value":"2","text":{"es":"d. Menos de 1 año."}}]}]},{"name":"page6","elements":[{"type":"radiogroup","name":"question6","title":{"es":"¿Piensa realizar algún retiro de su inversión durante los tres meses siguientes a la misma?"},"isRequired":true,"choices":[{"value":"7","text":{"es":"a. No"}},{"value":"3","text":{"es":"b. Sí, pero menos del 15% del total de mi cuenta."}},{"value":"0","text":{"es":"c. Sí, y más del 15% del total de mi cuenta."}},{"value":"0","text":{"es":"d. No tengo certeza."}}]}]},{"name":"page7","elements":[{"type":"radiogroup","name":"question7","title":{"es":"Cuál de las siguientes afirmaciones describe mejor su objetivo de inversión y su nivel de tolerancia frente a posibles fluctuaciones en el valor de sus inversiones:"},"isRequired":true,"choices":[{"value":"0","text":{"es":"a. Preservación de capital: No quiero arriesgar mi inversión inicial y no me siento cómodo con las fluctuaciones a corto plazo."}},{"value":"1","text":{"es":"b. Conservador: Me gustaría preservar mi inversión, pero estoy dispuesto a aceptar pequeñas fluctuaciones en el valor incluyendo posibles pérdidas en mi inversión inicial por periodos menores a un año."}},{"value":"3","text":{"es":"c. Moderado: Puedo aceptar fluctuaciones negativas, incluyendo posibles pérdidas en mi inversión inicial en el mediano plazo (1 a 2 años), con el fin de obtener tasas considerablemente mayores a CDT’s."}},{"value":"5","text":{"es":"d. Agresivo: Me gustaría que mis inversiones generaran los mayores rendimientos posibles. Estoy dispuesto a aceptar fluctuaciones negativas por periodos mayores a dos años, incluyendo la posible pérdida de mi inversión inicial."}}]}]},{"name":"page8","elements":[{"type":"radiogroup","name":"question8","title":{"es":"La mejor descripción de su experiencia como inversionista es:"},"isRequired":true,"choices":[{"value":"0","text":{"es":"a. Limitada: Tengo muy poca experiencia en inversiones."}},{"value":"1","text":{"es":"b. Moderada: Tengo alguna experiencia en inversiones, y me gustaría recibir asesoría adicional."}},{"value":"4","text":{"es":"c. Extensa: Soy un inversionista activo y experto, y me siento cómodo tomando mis propias decisiones de inversión."}}]}]},{"name":"page9","elements":[{"type":"radiogroup","name":"question9","title":{"es":"Fondo de Inversión Colectiva"},"isRequired":true,"choices":[{"value":"0","text":{"es":"a. Ninguna"}},{"value":"0","text":{"es":"b. Limitada"}},{"value":"1","text":{"es":"c. Moderada"}},{"value":"4","text":{"es":"d. Extensa"}}]},{"type":"radiogroup","name":"question10","title":{"es":"Bonos"},"isRequired":true,"choices":[{"value":"0","text":{"es":"a. Ninguna"}},{"value":"0","text":{"es":"b. Limitada"}},{"value":"1","text":{"es":"c. Moderada"}},{"value":"4","text":{"es":"d. Extensa"}}]},{"type":"radiogroup","name":"question11","title":{"es":"Accioniones"},"isRequired":true,"choices":[{"value":"0","text":{"es":"a. Ninguna"}},{"value":"0","text":{"es":"b. Limitada"}},{"value":"1","text":{"es":"c. Moderada"}},{"value":"4","text":{"es":"d. Extensa"}}]},{"type":"radiogroup","name":"question12","title":{"es":"ETF"},"isRequired":true,"choices":[{"value":"0","text":{"es":"a. Ninguna"}},{"value":"0","text":{"es":"b. Limitada"}},{"value":"1","text":{"es":"c. Moderada"}},{"value":"4","text":{"es":"d. Extensa"}}]}],"title":{"es":" Si usted tuviese que describir su experiencia en los siguientes productos de inversión (Ninguna, Limitada, Moderada o Extensa) cual seria para: "}},{"name":"page10","elements":[{"type":"radiogroup","name":"question13","title":{"es":". Si tuviera la oportunidad de aumentar su tasa de rendimiento potencial aceptando un mayor riesgo (incluyendo posibles pérdidas en la inversión inicial), por favor indique la alternativa que mejor describe su preferencia:"},"isRequired":true,"choices":[{"value":"0","text":{"es":"a. No estaría dispuesto a asumir un mayor riesgo."}},{"value":"3","text":{"es":"b. Estoy dispuesto a asumir un poco mas de riesgo con parte de mis recursos disponibles para inversión."}},{"value":"6","text":{"es":" c. Estoy dispuesto a asumir mucho más riesgo con parte de mis recursos disponibles para inversión."}}]}]},{"name":"page11","elements":[{"type":"radiogroup","name":"question14","title":{"es":"Suponga que usted invirtió inicialmente $80.000.000, y con el tiempo ese valor aumentó a $100.000.000. Suponga ahora que su inversión inesperadamente disminuyó de valor a $90.000.000. ¿Qué haría usted?"},"isRequired":true,"choices":[{"value":"4","text":{"es":"a. Invertiría mas."}},{"value":"3","text":{"es":"b. Se preocuparía, pero no tomaría ninguna acción"}},{"value":"2","text":{"es":"c. Transferiría parte de sus recursos hacia activos de menor riesgo"}},{"value":"0","text":{"es":"d. Redimiría la totalidad de su inversión."}}]}]}],"calculatedValues":[{"name":"total","expression":"{question1}+{question2}+{question3}+{question4}+{question5}+{question6}+{question7}+{question8}+{question9}+{question10}+{question11}+{question12}+{question13}+{question14}","includeIntoResult":true}],"sendResultOnPageNext":true,"showProgressBar":"bottom","progressBarType":"questions","storeOthersAsComment":false,"startSurveyText":{"es":"Comenzar"},"pagePrevText":{"es":"Anterior"},"pageNextText":{"es":"Siguiente"},"firstPageIsStarted":true};

function sendDataToServer(survey) {
    //send Ajax request to your web server
    alert("The results are: " + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});