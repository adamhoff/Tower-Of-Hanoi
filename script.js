var currentMoves = 0;

//Function to make getting elements id faster and less obtrusive.
function _(id) {
  return document.getElementById(id);
}
//While loops that remove all the now appended discs from the middle and end
//rods.
function reset() {
  while (_("middleRod").hasChildNodes()) {
    _("middleRod").removeChild(_("middleRod").lastChild);
  }
  while (_("endRod").hasChildNodes()) {
    _("endRod").removeChild(_("endRod").lastChild);
  }
}
//On click handler for the reset button. When reset button is clicked,
//it resets the user's current moves to 0.
_("reset").onclick = function() {
  currentMoves = 0;
  _("moves").innerHTML = "Moves: " + currentMoves;
  onchange_handler();
  reset();
};

//Function that is called when user starts a drag.
function dragstart_handler(event) {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.setData("text", event.target.getAttribute('id'));
}
//Function that is called when user drop event occurs
function drop_handler(event) {
  event.preventDefault();
  var elem_id = event.dataTransfer.getData("text");
  var target_id = event.target.getAttribute('id');
  //Appends the current disc to the current rod if the rod has no
  //child elements. Then adds 1 to he users current moves taken.
  if (event.target.lastElementChild == null) {
    event.target.appendChild(_(elem_id));
    currentMoves = currentMoves + 1;
    _("moves").innerHTML = "Moves: " + currentMoves;
  }
  /*Appends the current disc to the current rod if the current disc's width is
  smaller than the width of the last child element of the current rod. */
  else if (_(elem_id).offsetWidth < _(target_id).lastElementChild.offsetWidth) {
    event.target.appendChild(_(elem_id));
    currentMoves = currentMoves + 1;
    _("moves").innerHTML = "Moves: " + currentMoves;
    win();
  }
}
//Function needed to let drop events occur.
function dragover_handler(event) {
  event.preventDefault();
}
/*Function for when the user selects an option from the select element.
The amount of discs is displayed by appending the required number of discs to
the starting rod.*/
function onchange_handler(select) {
  switch (_("discAmount").value) {
    case '3':
      _("startingRod").append(_("disc1"));
      _("startingRod").append(_("disc2"));
      _("startingRod").append(_("disc3"));
      _("disc1").style.display = 'flex';
      _("disc2").style.display = 'flex';
      _("disc3").style.display = 'flex';
      _("disc4").style.display = 'none';
      _("disc5").style.display = 'none';
      _("disc6").style.display = 'none';
      _("disc7").style.display = 'none';
      _("disc8").style.display = 'none';
      _("minMoves").innerHTML = "Minimum Moves: 7"
      break;
    case '4':
      _("startingRod").append(_("disc1"));
      _("startingRod").append(_("disc2"));
      _("startingRod").append(_("disc3"));
      _("startingRod").append(_("disc4"));
      _("disc1").style.display = 'flex';
      _("disc2").style.display = 'flex';
      _("disc3").style.display = 'flex';
      _("disc4").style.display = 'flex';
      _("disc5").style.display = 'none';
      _("disc6").style.display = 'none';
      _("disc7").style.display = 'none';
      _("disc8").style.display = 'none';
      _("minMoves").innerHTML = "Minimum Moves: 15"
      break;
    case '5':
      _("startingRod").append(_("disc1"));
      _("startingRod").append(_("disc2"));
      _("startingRod").append(_("disc3"));
      _("startingRod").append(_("disc4"));
      _("startingRod").append(_("disc5"));
      _("disc1").style.display = 'flex';
      _("disc2").style.display = 'flex';
      _("disc3").style.display = 'flex';
      _("disc4").style.display = 'flex';
      _("disc5").style.display = 'flex';
      _("disc6").style.display = 'none';
      _("disc7").style.display = 'none';
      _("disc8").style.display = 'none';
      _("minMoves").innerHTML = "Minimum Moves: 31"
      break;
    case '6':
      _("startingRod").append(_("disc1"));
      _("startingRod").append(_("disc2"));
      _("startingRod").append(_("disc3"));
      _("startingRod").append(_("disc4"));
      _("startingRod").append(_("disc5"));
      _("startingRod").append(_("disc6"));
      _("disc1").style.display = 'flex';
      _("disc2").style.display = 'flex';
      _("disc3").style.display = 'flex';
      _("disc4").style.display = 'flex';
      _("disc5").style.display = 'flex';
      _("disc6").style.display = 'flex';
      _("disc7").style.display = 'none';
      _("disc8").style.display = 'none';
      _("minMoves").innerHTML = "Minimum Moves: 63"
      break;
    case '7':
      _("startingRod").append(_("disc1"));
      _("startingRod").append(_("disc2"));
      _("startingRod").append(_("disc3"));
      _("startingRod").append(_("disc4"));
      _("startingRod").append(_("disc5"));
      _("startingRod").append(_("disc6"));
      _("startingRod").append(_("disc7"));
      _("disc1").style.display = 'flex';
      _("disc2").style.display = 'flex';
      _("disc3").style.display = 'flex';
      _("disc4").style.display = 'flex';
      _("disc5").style.display = 'flex';
      _("disc6").style.display = 'flex';
      _("disc7").style.display = 'flex';
      _("disc8").style.display = 'none';
      _("minMoves").innerHTML = "Minimum Moves: 127"
      break;
    case '8':
      _("startingRod").append(_("disc1"));
      _("startingRod").append(_("disc2"));
      _("startingRod").append(_("disc3"));
      _("startingRod").append(_("disc4"));
      _("startingRod").append(_("disc5"));
      _("startingRod").append(_("disc6"));
      _("startingRod").append(_("disc7"));
      _("startingRod").append(_("disc8"));
      _("disc1").style.display = 'flex';
      _("disc2").style.display = 'flex';
      _("disc3").style.display = 'flex';
      _("disc4").style.display = 'flex';
      _("disc5").style.display = 'flex';
      _("disc6").style.display = 'flex';
      _("disc7").style.display = 'flex';
      _("disc8").style.display = 'flex';
      _("minMoves").innerHTML = "Minimum Moves: 255"
      break;
    default:
      _("startingRod").append(_("disc1"));
      _("startingRod").append(_("disc2"));
      _("startingRod").append(_("disc3"));
      _("disc1").style.display = 'flex';
      _("disc2").style.display = 'flex';
      _("disc3").style.display = 'flex';
      _("disc4").style.display = 'none';
      _("disc5").style.display = 'none';
      _("disc6").style.display = 'none';
      _("disc7").style.display = 'none';
      _("disc8").style.display = 'none';
      _("minMoves").innerHTML = "Minimum Moves: 7"
  }
}
onchange_handler();
//Win condition statment.
function win() {
  if (_("startingRod").childElementCount == 0 && _("middleRod").childElementCount == 0) {
    alert("Congratulations! You solved this Tower of Hanoi in " + currentMoves + " moves!");
  }
}
