---
layout: layout
---

# Contact us
The following code is using FormSubmit.co.

<style>
  #workemail {display: none;}
</style>

<form action="https://formsubmit.co/7934778c12a2a670f563d052a7359ed4" method="post">
  <p>
    <label>Name:
      <input type="text" name="name">
    </label>    
  </p>
  <p>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <input type="email" id="workemail" name="_honey">  
  </p>
  <p>
    <label>
      Message:
      <textarea name="message"></textarea>
    </label>
  </p>
  <p>
    <label>
      Attachment:
      <input type="file" name="attachment">
    </label>
  </p>
  <p>
    <label for="content">Content:</label>
    <textarea name="content" id="content"></textarea>
  </p>
  <input type="hidden" name="_next" value="https://laughing-perlman-852643.netlify.app/thanks">
  <input type="submit" value="Send Form">
</form>
