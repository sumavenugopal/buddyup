'use strict';

/* global SumoDB */

(function(exports) {
  var question_id;

  function submit_comment(evt) {
    evt.preventDefault();
    var comment = document.getElementById('question_field').value;

    if (question_id) {
      submit_answer(question_id, comment);
    } else {
      submit_question(comment);
    }
  }

  function submit_question(comment) {
    SumoDB.post_question(comment).then(function(response) {
      question_id = response.id;
    });
  }

  function submit_answer(question_id, comment) {
    SumoDB.post_answer(question_id, comment).then(function(response) {
    });
  }

  var QuestionController = {
    init: function() {
      var form = document.getElementById('question_form');
      form.addEventListener('submit', submit_comment);
    }
  };
  exports.QuestionController = QuestionController;
  QuestionController.init();
})(window);
