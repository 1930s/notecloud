export const fetchAllNotebooks = () => (
  $.ajax({
    method: 'GET',
    url: `api/notebooks`
  })
);

export const fetchSearchNotebooks = searchTerm => (
  $.ajax({
    method: 'GET',
    url: `api/notebooks?search=${searchTerm}`
  })
);

export const fetchNotebook = id => (
  $.ajax({
    method: 'GET',
    url: `api/notebooks/${id}`
  })
);

export const createNotebook = notebook => (
  $.ajax({
    method: 'POST',
    url: `api/notebooks`,
    data: { notebook }
  })
);

export const updateNotebook = notebook => (
  $.ajax({
    method: 'PATCH',
    url: `api/notebooks/${notebook.id}`,
    data: { notebook }
  })
);

export const destroyNotebook = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/notebooks/${id}`
  })
);