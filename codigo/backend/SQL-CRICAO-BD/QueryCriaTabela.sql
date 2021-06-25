create table Usuario(
	cpf int primary key,
	nome varchar(100) NOT NULL,
	login varchar(30) NOT NULL,
	senha varchar(100) NOT NULL,
	datNasc DATE NOT NULL
);
create table Cartao(
	usuario_cpf int foreign key references Usuario(cpf) NOT NULL,
	nomeTitularCartao varchar(45) NOT NULL,
	numeroCartao int NOT NULL,
	CVV int NOT NULL
);
create table Endereco(
	idEndereco int primary key identity NOT NULL,
	Usuario_cpf int foreign key references Usuario(cpf) NOT NULL,
	cep int NOT NULL,
	logradouro varchar(45) NOT NULL,
	cidade varchar(45) NOT NULL,
	bairro varchar(45) NOT NULL,
	estado varchar(2) NOT NULL
);
create TABLE Servico(
	idServico INT PRIMARY KEY,
	campoServico VARCHAR(45) NOT NULL,
	areaServico VARCHAR(45) NOT NULL,
	taxaServico FLOAT NOT NULL,
	horarioServico VARCHAR(45) NOT NULL,
	diasServico VARCHAR(45) NOT NULL
);
create table agendaServico(
	idAgendaServico int primary key identity NOT NULL,
	Usuario_cpf int foreign key references Usuario(cpf) NOT NULL,
	Servico_idServico int foreign key references Servico(idServico) NOT NULL,
	dataHora datetime NOT NULL,
	status_servico tinyint NOT NULL 
);
create table notaFiscal(
	idnotaFiscal int primary key identity NOT NULL,
	agendaServico_Servico_idServico int foreign key references agendaServico(idAgendaServico) NOT NULL,
	valor float NOT NULL
);