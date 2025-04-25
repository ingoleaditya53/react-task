// src/utils/taskUtils.js

/**
 * Sorts tasks by deadline.
 * @param {Array} tasks - Array of task objects.
 * @param {string} order - 'asc' or 'desc'.
 * @returns {Array}
 */
export const sortByDeadline = (tasks, order = 'asc') => {
    return tasks.sort((a, b) => {
      const dateA = new Date(a.deadline);
      const dateB = new Date(b.deadline);
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
  };
  
  /**
   * Sorts tasks by priority (Low < Medium < High).
   * @param {Array} tasks 
   * @param {string} order - 'asc' or 'desc'
   * @returns {Array}
   */
  export const sortByPriority = (tasks, order = 'asc') => {
    const priorityMap = { Low: 1, Medium: 2, High: 3 };
    return tasks.sort((a, b) => {
      const aPriority = priorityMap[a.priority] || 0;
      const bPriority = priorityMap[b.priority] || 0;
      return order === 'asc' ? aPriority - bPriority : bPriority - aPriority;
    });
  };
  
  /**
   * Filters tasks by category.
   * @param {Array} tasks 
   * @param {string} category 
   * @returns {Array}
   */
  export const filterByCategory = (tasks, category) => {
    if (category === 'All') return tasks;
    return tasks.filter(task => task.category === category);
  };
  
  /**
   * Filters tasks by status.
   * @param {Array} tasks 
   * @param {string} status - 'All', 'Completed', 'Pending', 'Overdue'
   * @returns {Array}
   */
  export const filterByStatus = (tasks, status) => {
    const now = new Date();
    switch (status) {
      case 'Completed':
        return tasks.filter(task => task.completed);
      case 'Pending':
        return tasks.filter(task => !task.completed && new Date(task.deadline) >= now);
      case 'Overdue':
        return tasks.filter(task => !task.completed && new Date(task.deadline) < now);
      default:
        return tasks;
    }
  };
  
  /**
   * Filters tasks within a date range.
   * @param {Array} tasks 
   * @param {string} startDate - YYYY-MM-DD
   * @param {string} endDate - YYYY-MM-DD
   * @returns {Array}
   */
  export const filterByDateRange = (tasks, startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return tasks.filter(task => {
      const taskDate = new Date(task.deadline);
      return taskDate >= start && taskDate <= end;
    });
  };
  