const role = 'manager';

if (role === 'manager') {
    console.log('Добро пожаловать, Менеджер!');
} else if (role === 'admin') {
    console.log('Добро пожаловать, Админ!');
} else if (role === 'seo') {
    console.log('Добро пожаловать, СЕО!');
} else {
    console.log('Ты кто такой?')
}

switch (role) {
    case 'manager':
    console.log('Добро пожаловать, Менеджер!');  
    break;
    case 'admin':
    console.log('Добро пожаловать, Админ!'); 
    break;   
    default:
        console.log('Ты кто такой?');    
}