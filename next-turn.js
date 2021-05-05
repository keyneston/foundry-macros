if (game.combats.active) {
    game.combats.active.nextTurn()
    var combatant = game.combats.active.combatant;
    //console.log(combatant)
   

    //console.log(game.actors.tokens.get(combatant.tokenId))

    ChatMessage.create({
        user: game.user._id,
        speaker: ChatMessage.getSpeaker({token: actor}),
        content: `It is now ${combatant.name}'s turn`
    });
}
