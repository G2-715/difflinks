import "./style.scss";

const api = "http://localhost:5000";

(function () {
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

    function setData(data) {
        // Remove all spaces
        data = data.replace(/\s/g, '');
        let linkWithProtocol = getWithProtocol(data);
        let secretLink = getSecretLink(linkWithProtocol);
        changingData.classList.contains('loading') ? changingData.classList.remove('loading') : null
        changingData.href = linkWithProtocol;
        changingData.title = secretLink;
        animateInput(changingData, 'innerHTML', secretLink, 0);
    }

    function getWithProtocol(link) {
        let pattern = /^((http|https|ftp):\/\/)/;

        if (!pattern.test(link)) {
            return ("http://" + trimByChar(link, '/'));
        }

        return link
    }

    function getSecretLink(link) {
        return link
    }

    function changeData(e) {
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

    function animateInput(element, attribute, text, index, callback) {
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

    function handleDataInputEnter(e) {
        if (e.keyCode === 13) {
            changeData(e)
        }
    }

    function getData() {
        return fetch(`${api}/link`)
            .then(res => res.json())
            .then(data => data.link);
    }

    function sendData(data) {
        return fetch(`${api}/setlink`, {
            method: "POST",
            body: JSON.stringify({
                link: data
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    function setBtnLoading(element, loading) {
        loading ? element.classList.add('loading') : element.classList.remove('loading')
    }

    function trimByChar(string, character) {
        const first = [...string].findIndex(char => char !== character);
        const last = [...string].reverse().findIndex(char => char !== character);
        return string.substring(first, string.length - last);
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