const escolha = require();
app.get('/escolha', function(req, res){
    escolha.findAll().then(function() {
        res.render('escolha', {escolhas:escolha})
    })
});