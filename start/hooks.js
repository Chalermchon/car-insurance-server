const { hooks } = require('@adonisjs/ignitor')

hooks.after.providersBooted(() => {
  const View = use('View')

  View.global('formatDate', function (dateTime) {
    const date = new Date(dateTime)
    const month = [ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน",
                    "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม",
                    "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม", ]

    return  date.getDate().toString() + " " +
            month[date.getMonth()] + " " +
            (date.getFullYear() + 543).toString()
    
  })
  
})