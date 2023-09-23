// Task 1 

const notifications = [
  {
    source: 'facebook',
    text: ' Буданов розповів, як ЗСУ звільнятимуть Бахмут',
    date: '25.06.23',
  },
  {
    source: 'facebook',
    text: 'ЗСУ прорвали оборону росіян у Вербовому',
    date: '21.09.23',
  },
  {
    source: 'twitter',
    text: 'Iран брязкає зброєю',
    date: '18.08.23',
  },
];



function iteratorNotifications(notificationsArray) {
  let index = 0;

  return {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          if (index < notificationsArray.length) {
            return { value: notificationsArray[index++], done: false };
          } else {
            return { done: true };
          }
        },
      };
    },
  };
}

function transformArrayToObject(notificationsArray)
{
  let notificationsObject = {};

  const iterator = iteratorNotifications(notificationsArray);

  for (const notification of iterator) {
    const { source, text, date } = notification;

    if (!notificationsObject[source])
    {
      notificationsObject[source] = [];
    }

    notificationsObject[source].push({ text, date });
  }

  return notificationsObject;
}


 



const resultNotification = transformArrayToObject(notifications);
console.log(resultNotification);

