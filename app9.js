$(function(){
 var $taskList = $("#taskList");
 var $taskItem = $("#taskItem");
 var $notice = $("#notice");
 
 var message = function(){
  if (!$taskList.children().length){
   $notice.fadeIn("fast");
  } else {
   $notice.css("display", "none")
  }
 }

 var remover = function(){
   if ($taskList.children().length){
   $(".remove_all").removeClass("invisible");
  } 
 }

 
 $("#addTask").on("click", function(){
  if(!$taskItem.val()) {return false;}
  $taskList.append("<li class='done'>" + $taskItem.val() + "<button class='check'>&#10004</button> <button class='delete'>&#10006</button></li>");
  $taskItem.val("");

 remover();
 message();
 

  $(".delete").on("click", function(){
  var $parent = $(this).parent();

  setTimeout(function(){
   $parent.remove();
   message();
  }, 500);
  
  })

  
  $(".done").on("click", function(){
   $(this).addClass('cross');
  })


  $(".check").on("click", function(){
  var $parent = $(this).parent();
  $parent.addClass('cross');
  })
 })

 $(".remove_all").on("click", function(){
  return $taskList.children(".done").remove(); 
  
 })

})

