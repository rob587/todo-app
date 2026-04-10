Il service deve avere:

Array di todo (ogni todo ha: id, titolo, completato)
getTodos() - Torna tutti i todo
aggiungiTodo(titolo: string) - Aggiungi un todo
eliminaTodo(id: number) - Elimina un todo
completaTodo(id: number) - Segna come completato
contaTodo() - Conta quanti todo hai
contaCompletati() - Conta quanti hai completato

Nel Component:

Inietta il TodoService nel constructor
Crea il form per aggiungere todo
Mostra la lista dei todo
Bottone per eliminare
Checkbox per completare
Usa *ngIf, *ngFor, [ngClass] per evidenziare i completati

Styling:

Todo completati hanno strikethrough
Todo completati hanno colore grigio
Input e bottone belli
