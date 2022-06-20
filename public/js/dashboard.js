const editInfoToggle = document.querySelector("#edit-info-toggle")
const editInfoForm = document.querySelector(".edit-info-form")
const createPostToggle = document.querySelector("#create-post-toggle")
const createPostForm = document.querySelector(".create-post-form")

const handleDashboardToggle = (button, form) => {
  if (!button.classList.contains("active")) {
    button.classList.add("active")
    button.textContent =
      button === editInfoToggle ? "Cancel Edit" : "Discard Post"
    form.classList.add("active")
  } else {
    if (
      button === createPostToggle &&
      form[1].value &&
      !window.confirm(
        "Are you sure you'd like to discard this post? Everything you have written will be lost."
      )
    )
      return
    form.reset()
    form.classList.remove("active")
    button.textContent =
      button === editInfoToggle ? "Edit Profile Info" : "Create New Post"
    button.classList.remove("active")
  }
}

editInfoToggle.addEventListener("click", () =>
  handleDashboardToggle(editInfoToggle, editInfoForm)
)
createPostToggle.addEventListener("click", () =>
  handleDashboardToggle(createPostToggle, createPostForm)
)

const handleEditInfoSubmit = e => {
  e.preventDefault()
  // submit patch request
}

const handleCreatePostSubmit = e => {
  e.preventDefault()
  // submit post request
  //queryselector (titleinput & values)
  //queryselector (textinput & values)
  //post using fetch function to URL/API/post
  //send title and text in the body  
  //post_title: req.body.post_title, (titel input)
    //post_body: req.body.post_body, (text input)
    
    //SIMILAR TO EDIT (USE PUT)
}

editInfoForm.addEventListener("submit", handleEditInfoSubmit)
createPostForm.addEventListener("submit", handleCreatePostSubmit)