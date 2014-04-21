Templates = {}
Templates.difficulties = [
  "<div class='col-sm-9'>",
    "{{#each rows}}",
      "<div class='radio'>",
        "<label>",
          "<input type='radio' name='difficulty_id' class='difficulty_id' value='{{this.[0]}}'>",
          "<span class='glyphicon glyphicon-stop' style='color: {{this.[2]}};'></span> {{this.[1]}}",
        "</label>",
      "</div>",
    "{{/each}}",
  "</div>"
].join('\n')

Templates.current_types = [
  "<select class='form-control current-types-select'>",
    "{{#each rows}}",
      "<option value='{{this.[0]}}'>{{this.[1]}}</option>",
    "{{/each}}",
  "</select>"
].join('\n')

Templates.current_citizens = [
  "<select class='form-control current-citizens-select'>",
    "{{#each rows}}",
      "<option value='{{this.[0]}}'>{{this.[1]}}</option>",
    "{{/each}}",
  "</select>"
].join('\n')

Templates.main = [
  "{{#each rows}}",
    "<a href='complaint.html?id={{this.[0]}}'>",
      "<div class='panel panel-default' data-id='{{this.[0]}}'>",
        "<div class='panel-heading'>",
          "<h4 class=' main-heading'>",
            "{{this.[2]}}",
          "</h4>",
        "</div>",
        "<div class='panel-body main-body'>",
          "<p>",
            "{{this.[1]}}",
          "</p>",
        "</div>",
      "</div>",
    "</a>", 
  "{{/each}}"
].join('\n')

Templates.complaints_table = [
  "<table class='table table-striped tablesorter no-border'>",
    "<thead>",
      "<tr>",
        "<th class='caret-pointer'>Kodaniku nimi<span class='caret'></span></th>",
        "<th class='caret-pointer'>Kaebus<span class='caret'></span></th>",
        "<th class='caret-pointer'>Tüüp<span class='caret'></span></th>",
      "</tr>",
    "</thead>",
    "<tbody class='tbody'>",
      "{{#each rows}}",
        "<tr>",
          "<td><a href='citizen.html?id={{this.[0].[0]}}'>{{this.[0].[1]}}</a></td>",
          "<td><a href='complaint.html?id={{this.[1].[0]}}'>{{this.[1].[1]}}</a></td>",
          "<td>",
            "<span class='glyphicon glyphicon-stop' style='color: {{this.[2].[1]}}'></span>",
            "{{this.[2].[0]}}",
          "</td>",
        "</tr>", 
      "{{/each}}",
    "</tbody>",
  "</table>"
      
].join('\n')

Templates.complaint_show = [
    "<div class='container'>",
        "<div class='page-header'>",
          "<h1>",
          "{{rows.[0].[0]}}",
          "</h1>",
        "</div>",
      "</div>",
      "<div class='container padding-bottom'>",
        "<div class='row'>",
          "<div class='col-md-6'>",
            "<p>Süüalune: <a href='citizen.html?id={{rows.[2].[0]}}'>{{rows.[2].[1]}}</a></p>",
            "<p>Tüüp: {{rows.[1].[0]}}</p>",
            "<p>Aeg: {{rows.[0].[2]}}</p>",
            "<p>Kirjeldus: {{rows.[0].[1]}}</p>",
          "</div>",
            "<div class='col-md-6'>",
              "<div id='map_canvas'></div>", 
            "</div>",
            "<div>",
              "{{#each rows.[4]}}",
                "<img src='{{this}}' alt='Image' class='gallery-image'/>",
              "{{/each}}",
            "</div>",
        "</div>",
      "</div>"
].join('\n')

Templates.citizen = [
  "<div class='container'>",
    "<div class='page-header'>",
      "<h1>{{rows.[0].[1]}}</h1>",
    "</div>",
  "</div>",
  "<div class='container'>",
    "<div class='row'>",
      "<div class='col-md-6'>",
        "<ul class='list-unstyled'>",
          "<li>",
            "<h4>Sugu: {{rows.[0].[2]}}</h4>",
          "</li>",
          "<li>",
            "<h4>Sünniaeg: {{rows.[0].[3]}}</h4>",
          "</li>",
          "<li>",
            "<h4>Elukoht: {{rows.[0].[4]}}</h4>",
          "</li>",
        "</ul>",
      "</div>",
      "<div class='col-md-6'>",
        "<img src='{{rows.[0].[5]}}' alt='pilt' class='img-thumbnail'>",
      "</div>",
    "</div>",
  "</div>",
  "<div class='container'>",
    "<div class='row' style=' margin-top:5%;'> ",
      "{{#each rows.[1]}}",
        "<div class='panel panel-default col-md-5' style='margin-left:1%;'>",
          "<div class='panel-body'>",
            "<a href='complaint.html?id={{this.[0]}}'>",
              "<h4>{{this.[1]}}</h4>",
              "<h5><span class='glyphicon glyphicon-stop' style='color: {{this.[3]}};'></span>{{this.[4]}}</h5>",
              "<p>",
              "{{this.[2]}}", 
              "</p>",
            "</a>",
          "</div>",
        "</div>",
      "{{/each}}",
    "</div>",
  "</div>"
].join('\n')

Templates.citizens = [
  "<ul class='list-unstyled'>",
    "{{#each rows}}",
      "<li><a href='citizen.html?id={{this.[0]}}'><h4>{{this.[1]}}</h4></li>",
    "{{/each}}",
  "</ul>"
].join('\n')