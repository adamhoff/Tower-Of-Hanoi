var currentMoves = 0;

function _(id) {
  return document.getElementById(id);
}
_("reset").onclick = function() {
  currentMoves = 0;
  _("moves").innerHTML = "Moves: " + currentMoves;
  onchange_handler();
  while (_("middleRod").hasChildNodes()) {
    _("middleRod").removeChild(_("middleRod").lastChild);
  }
  while (_("endRod").hasChildNodes()) {
    _("endRod").removeChild(_("endRod").lastChild);
  }
};

function dragstart_handler(event) {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.setData("text", event.target.getAttribute('id'));
}

function drop_handler(event){
  event.preventDefault();
  var elem_id = event.dataTransfer.getData("text");
  var target_id = event.target.getAttribute('id');
  if (event.target.lastElementChild == null) {
    event.target.appendChild(_(elem_id));
    currentMoves = currentMoves + 1;
    _("moves").innerHTML = "Moves: " + currentMoves;
  }
  else if (_(elem_id).offsetWidth < _(target_id).lastElementChild.offsetWidth) {
    event.target.appendChild(_(elem_id));
    currentMoves = currentMoves + 1;
    _("moves").innerHTML = "Moves: " + currentMoves;
  }
}

function dragover_handler(event) {
  event.preventDefault();
}

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
