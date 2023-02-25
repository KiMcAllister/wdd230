
const input = document.querySelector('input[name="form_submission_time"]');

const now = new Date();

const isoDate = now.toISOString();

input.value = isoDate;