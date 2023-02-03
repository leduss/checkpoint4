create table role
(
    id   int auto_increment
        primary key,
    type varchar(100) not null
);

create index role_id_index
    on role (id);

create table user
(
    id             int auto_increment
        primary key,
    firstname      varchar(200)  null,
    lastname       varchar(200)  null,
    sexe           varchar(50)   null,
    rue            varchar(1000) null,
    code_postal    varchar(20)   null,
    ville          varchar(100)  null,
    pays           varchar(100)  null,
    email          varchar(100)  null,
    mobile         varchar(20)   null,
    date_naissance date          null,
    lieu_naissance varchar(200)  null,
    password       varchar(300)  not null,
    role_id        int           null
);

create table doctor
(
    id            int auto_increment
        primary key,
    user_id       int          null,
    namedoctor    varchar(200) null,
    adressedoctor varchar(500) null,
    villedoctor   varchar(200) null,
    teldoctor     varchar(20)  null,
    constraint doctor_user_id_fk
        foreign key (user_id) references user (id)
);

create table document
(
    id                int          not null
        primary key,
    ordonnance_cachet varchar(200) null,
    ordonnance_sang   varchar(200) null,
    user_id           int          null,
    constraint document_user_id_fk
        foreign key (user_id) references user (id)
);

create table labo
(
    id          int auto_increment
        primary key,
    user_id     int          null,
    namelabo    varchar(200) null,
    adresselabo varchar(300) null,
    villelabo   varchar(200) null,
    tellabo     varchar(20)  null,
    constraint labo_user_id_fk
        foreign key (user_id) references user (id)
);

create table valeurideal
(
    id      int,
    user_id int         null,
    min     varchar(10) null,
    max     varchar(10) null,
    constraint valeurideal_user_id_fk
        foreign key (user_id) references user (id)
);

create index user_id
    on valeurideal (id);

alter table valeurideal
    modify id int auto_increment;

create table value_sang
(
    id      int auto_increment
        primary key,
    valeur  varchar(20) null,
    user_id int         null,
    date    date        null,
    constraint value_sang_user
        foreign key (user_id) references user (id)
);