$(document).ready(function () {
  var figuraSelect;

  var canvas = document.getElementById('dibujo');
  var ctx = canvas.getContext('2d');

  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    $("#panelInformacion").hide();
    $("#panelFormularios").show();

    var target = $(e.target).attr("href");
    target = target.replace(/#/, "");
    figuraSelect = target;
  });

  $("#botonCalcular").click(function () {
    console.log(figuraSelect);
  });
  window.calcularYDibujar = function (figura) {
    switch (figura) {
      case "cuadrado":
        var longitud = $("#txtLadoC").val();
        dibujarCuadrado(longitud);
        $("#Area").html(calcularAreaCuadrado(longitud));
        $("#Perímetro").html(calcularPerimetroCuadrado(longitud));
        break;
      case "circulo":
        var radio = $("#txtRadio").val();
        dibujarCirculo(radio);
        $("#Area").html(calcularAreaCircunferencia(radio));
        $("#Perímetro").html(calcularPerimetroCircunferencia(radio));
        break;
      case "rectangulo":
        var largo = $("#txtLargoR").val();
        var alto = $("#txtAltoR").val();
        dibujarRectangulo(largo, alto);
        $("#Area").html(calcularAreaRectangulo(largo, alto));
        $("#Perímetro").html(calcularPerimetroRectangulo(largo, alto));
        break;
      case "triangulo":
        var longitud = $("#txtLadoT").val();
        dibujarTriangulo(longitud);
        $("#Area").html(calcularAreaTriangulo(longitud));
        $("#Perímetro").html(calcularPerimetroTriangulo(longitud));
        break;
    }
    return false;
  };
  function dibujarCuadrado(longitud) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(25, 25, longitud, longitud);
  }

  function dibujarCirculo(radio) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.beginPath();
    ctx.arc(100, 100, radio, 0, 2 * Math.PI);
    ctx.restore();
    ctx.stroke();
  }

  function dibujarTriangulo(longitud) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    var h = longitud * (Math.sqrt(3) / 2);

    ctx.save();
    ctx.translate(100, 100);

    ctx.beginPath();

    ctx.moveTo(0, -h / 2);
    ctx.lineTo(-longitud / 2, h / 2);
    ctx.lineTo(longitud / 2, h / 2);
    ctx.lineTo(0, -h / 2);
    ctx.restore();
    ctx.stroke();

  }

  function dibujarRectangulo(ancho, alto) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(30, 25, ancho, alto);
  }

  /**
 * Función que calcula el perímetro del cuadrado.
 * El perímetro se halla multiplicando la longitud de uno de sus lados por 4.
 * @param {Number} longitud Longitud del cuadrado.
 * @return {Number} Perímetro del cuadrado.
 */
  function calcularPerimetroCuadrado(longitud) {
    return longitud * 4;
  }

  /**
   * Función que calcula el área del cuadrado.
   * El área se halla multiplicando la longitud de uno de sus lados por el mismo valor.
   * @param {Number} longitud Longitud del cuadrado.
   * @return {Number} Área del cuadrado.
   */
  function calcularAreaCuadrado(longitud) {
    return longitud * longitud;
  }

  /**
   * Función que calcula el perímetro del triángulo.
   * El área se halla multiplicando la longitud de uno de sus lados por 3.
   * @param {Number} longitud Longitud del triángulo.
   * @return {Number} Perímetro del triángulo.
   */
  function calcularPerimetroTriangulo(longitud) {
    return longitud * 3;
  }

  /**
   * Función que calcula el área del triángulo.
   * El área se halla aplicando la formula descrita en la función.
   * @param {Number} longitud Longitud del triángulo.
   * @return {Number} Área del triángulo.
   */
  function calcularAreaTriangulo(longitud) {
    // Fórmula: Raiz de 3 por la longitud, dividido en 2
    return (Math.sqrt(3) * longitud) / 2;
  }

  /**
   * Función que calcula el perímetro de la circunferencia.
   * El perímetro se obtiene aplicando la formula descrita en la función.
   * @param {Number} radio Radio de la función (distancia existente entre el punto medio).
   * @return {Number} Perímetro de la circunferencia.
   */
  function calcularPerimetroCircunferencia(radio) {
    // Fórmula: 2 * PI * r
    return 2 * Math.PI * radio;
  }

  /**
   * Función que calcula el área de la circunferencia.
   * El perímetro se obtiene aplicando la formula descrita en la función.
   * @param {Number} radio Radio de la función (distancia existente entre el punto medio).
   * @return {Number} Área del triángulo.
   */
  function calcularAreaCircunferencia(radio) {
    // Fórmula: PI * Radio^2
    return Math.PI * Math.pow(radio, 2);
  }

  /**
   * Función que calcula el perímetro del rectángulo.
   * @param {Number} base Valor de la base del rectángulo.
   * @param {Number} altura Valor de la altura del rectángulo.
   * @return {Number} Perímetro del rectángulo.
   */
  function calcularPerimetroRectangulo(base, altura) {
    return 2 * base + 2 * altura;
  }

  /**
   * Función que calcula el área del rectángulo.
   * @param {Number} base Valor de la base del rectángulo.
   * @param {Number} altura Valor de la altura del rectángulo.
   * @return {Number} Área del rectángulo.
   */
  function calcularAreaRectangulo(base, altura) {
    return base * altura;
  }
});