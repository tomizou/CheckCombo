/**
 * 削除フラグのON,OFF操作があった場合は、整合性チェック対象とする
 * Checked操作あり：チェック対象とする
 * Checkedはずす操作：チェック対象からはずす
 */
var consCheckArray = [];

$(function() {

	$('.chkdelete').on('change', function () {
		var len = $(this).attr('class').length;
		var number = $(this).attr('id').substring(len);
		var val = $('#txtid' + number).attr('value');

		if ($(this).prop('checked')) {

			// consCheckArrayにIDが存在しなければ追加する
			var index = consCheckArray.indexOf(val);

			if (index == -1) {
				consCheckArray.push(val);
				console.log(consCheckArray);
			}

		} else {

			// consCheckArrayにIDが存在していれば削除する
			var index = consCheckArray.indexOf(val);

			if (index > -1) {
				consCheckArray.splice(index, 1);
				console.log(consCheckArray);
			}
		}
	});

});

function doSave() {
	console.log(consCheckArray);
}
