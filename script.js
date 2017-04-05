var currentMoves = 0;

function _(id) {
  return document.getElementById(id);
}

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
  switch (_("diskAmount").value) {
    case '3':
    _("disk4").style.display = 'none';
    _("disk5").style.display = 'none';
    _("disk6").style.display = 'none';
    _("disk7").style.display = 'none';
    _("disk8").style.display = 'none';
    _("minMoves").innerHTML = "Minimum Moves: 7"
    break;
    case '4':
    _("startingRod").append(_("disk4"));
    _("disk4").style.display = 'flex';
    _("disk5").style.display = 'none';
    _("disk6").style.display = 'none';
    _("disk7").style.display = 'none';
    _("disk8").style.display = 'none';
    _("minMoves").innerHTML = "Minimum Moves: 15"
    break;
    case '5':
    _("startingRod").append(_("disk4"));
    _("startingRod").append(_("disk5"));
    _("disk4").style.display = 'flex';
    _("disk5").style.display = 'flex';
    _("disk6").style.display = 'none';
    _("disk7").style.display = 'none';
    _("disk8").style.display = 'none';
    _("minMoves").innerHTML = "Minimum Moves: 31"
    break;
    case '6':
    _("startingRod").append(_("disk4"));
    _("startingRod").append(_("disk5"));
    _("startingRod").append(_("disk6"));
    _("disk4").style.display = 'flex';
    _("disk5").style.display = 'flex';
    _("disk6").style.display = 'flex';
    _("disk7").style.display = 'none';
    _("disk8").style.display = 'none';
    _("minMoves").innerHTML = "Minimum Moves: 63"
    break;
    case '7':
    _("startingRod").append(_("disk4"));
    _("startingRod").append(_("disk5"));
    _("startingRod").append(_("disk6"));
    _("startingRod").append(_("disk7"));
    _("disk4").style.display = 'flex';
    _("disk5").style.display = 'flex';
    _("disk6").style.display = 'flex';
    _("disk7").style.display = 'flex';
    _("disk8").style.display = 'none';
    _("minMoves").innerHTML = "Minimum Moves: 127"
    break;
    case '8':
    _("startingRod").append(_("disk4"));
    _("startingRod").append(_("disk5"));
    _("startingRod").append(_("disk6"));
    _("startingRod").append(_("disk7"));
    _("startingRod").append(_("disk8"));
    _("disk4").style.display = 'flex';
    _("disk5").style.display = 'flex';
    _("disk6").style.display = 'flex';
    _("disk7").style.display = 'flex';
    _("disk8").style.display = 'flex';
    _("minMoves").innerHTML = "Minimum Moves: 255"
    break;
    default:
    _("disk4").style.display = 'none';
    _("disk5").style.display = 'none';
    _("disk6").style.display = 'none';
    _("disk7").style.display = 'none';
    _("disk8").style.display = 'none';
  }
}
