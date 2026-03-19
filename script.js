function addTask() {
    const raw = taskInput.value.trim();           // Get input value
    if (raw === '') {                              // Check if empty
        taskInput.classList.add('is-invalid');     // Show error styling
        setTimeout(() => taskInput.classList.remove('is-invalid'), 300);
        return;
    }
    tasks.push({ text: raw, completed: false });  // Add new task to array
    saveTasks();                                    // Save to localStorage
    render();                                       // Update display
    taskInput.value = '';                           // Clear input field
    taskInput.focus();                              // Focus back on input
}





// Inside render() - for each task:
const delBtn = document.createElement('button');
delBtn.className = 'btn-delete-minimal';
delBtn.textContent = 'Delete';
delBtn.addEventListener('click', (e) => {
    e.stopPropagation();                            // Prevent triggering other events
    tasks.splice(idx, 1);                           // Remove task at specific index
    saveTasks();                                     // Save to localStorage
    render();                                         // Update display
});