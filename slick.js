function run()
{
    var temp = document.getElementById("navbar");
        if (temp.style.display === 'block')
           { temp.style.display='none';
           temp.style.zIndex='99';
           }
        else
        {
           temp.style.display='block';
           temp.style.zIndex='99';
        }
}



