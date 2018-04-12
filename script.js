var currentMoves = 0;

//Function that make getting elements ID faster and less obtrusive.
function _(id) {
  return document.getElementById(id);
}
//Removes all rods from non-starting rod
function reset() {
  while (_("middleRod").hasChildNodes()) {
    _("middleRod").removeChild(_("middleRod").lastChild);
  }
  while (_("endRod").hasChildNodes()) {
    _("endRod").removeChild(_("endRod").lastChild);
  }
}

//Resets the user's current moves to 0.
_("reset").onclick = function() {
  currentMoves = 0;
  _("moves").innerHTML = "Moves: " + currentMoves;
  onchange_handler();
  reset();
};

function dragstart_handler(event) {
  var parentNode = _(event.target.getAttribute('id')).parentNode;
  if (_(event.target.getAttribute('id')) ==  parentNode.lastElementChild) {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.setData("text", event.target.getAttribute('id'));
  }
}

//Appends the active disc to rod if child has 0 elements or if the width is smaller than last child element of rod
function drop_handler(event) {
  event.preventDefault();
  var elem_id = event.dataTransfer.getData("text");
  var target_id = event.target.getAttribute('id');

  if (event.target.lastElementChild == null ) {
    event.target.appendChild(_(elem_id));
    currentMoves = currentMoves + 1;
    _("moves").innerHTML = "Moves: " + currentMoves;
  }
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
//Switch statement that appends number of selected disks to the starting rod.
function onchange_handler(select) {
  _("moves").innerHTML = "Moves: " + 0;
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
