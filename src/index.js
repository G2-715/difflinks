import "./style.scss";

(function() {
    let changingData,
        dataInput,
        changeDataBtn,
        inputSpeed,
        loading;

    changingData = document.querySelector('.data-container_changing-data a');
    dataInput = document.querySelector('.data-container_data-input input');
    changeDataBtn = document.querySelector('.data-container_change-data-btn button');
    inputSpeed = 100;
    loading = false;

    function setData (data) {
        changingData.classList.contains('loading') ? changingData.classList.remove('loading') : null
        changingData.href = data;
        changingData.title = data;
        animateInput(changingData, 'innerHTML', data, 0);
    }

    function changeData (e) {
        let currentValue = dataInput.value;

        if (currentValue) {
            loading = true;
            setBtnLoading(changeDataBtn, loading);

            sendData(currentValue)
                .then(() => {
                    loading = false
                    setBtnLoading(changeDataBtn, loading)
                })
                .then(resp => {
                    dataInput.value = '';
                    setData(currentValue)
                })
        }
    }

    function animateInput (element, attribute, text, index, callback) {
        if (index < text.length) {
            setTimeout(() => {
                element[attribute] = text.substring(0, index + 1);
                animateInput(element, attribute, text, index + 1, callback);
            }, inputSpeed);
        }
        else {
            callback ? callback() : null
        }
    }

    function handleDataInputEnter (e) {
        if (e.keyCode === 13) {
            changeData(e)
        }
    }

    function getData () {
        return new Promise((res, rej) => {
            setTimeout(() => res(localStorage.getItem('data')), 1000)
        })
    }

    function sendData (data) {
        return new Promise((res, rej) => {
            localStorage.setItem('data', data)
            setTimeout(res, 1000)
        })
    }

    function setBtnLoading (element, loading) {
        loading ? element.classList.add('loading') : element.classList.remove('loading')
    }

    // Window listeners
    window.addEventListener('load', function () {
        changeDataBtn.addEventListener('click', changeData, false)
        dataInput.addEventListener('keyup', handleDataInputEnter, false)
    }, false);

    window.addEventListener('DOMContentLoaded', function () {
        getData()
            .then(resp => {
                setData(resp)
            })
    }, false);

    window.addEventListener('unload', function () {
        changeDataBtn.removeEventListener('click', changeData, false)
        dataInput.removeEventListener('keyup', handleDataInputEnter, false)
    }, false);

})();