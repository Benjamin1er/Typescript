### En t'inspirant de l'exemple ci-dessus, écris une classe BankCustomer.

    - Son constructeur devra prendre deux paramètres, le premier étant le nom du client, le second, le code secret de sa carte bleue.
    - Ces paramètres devront être stockés de façon à n'être pas visibles depuis le code appelant (privés, donc).
    - Une méthode getName permettra de récupérer le nom du client.
    - Une méthode verifyPinInput devra permettre de vérifier si un code secret entré correspond bien au code stocké par l'instance, et renvoyer true si c'est le cas, false sinon.

<i>
    1 NPM Install
    1 tsc BankCustomer.ts
    1 node BankCustomer.js
    1 Return noErrors ? 'Win' : 'Go Back To School'
</i>