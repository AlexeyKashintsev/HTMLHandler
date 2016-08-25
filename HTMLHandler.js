/**
 * @author Алексей
 * @module HTMLHandler
 */

define('HTMLHandler', [], function (ModuleName) {
    return new function () {
        var self = this;
        
        self.createElement = function(aType, aClass, aContainer, aID, aBeforeContainer) {
            var el = document.createElement(aType);
            if (!!aClass)
                el.className = aClass;
            if (!!aID)
                el.id = aID;

            if (aContainer && typeof (aContainer) !== "object")
                aContainer = document.getElementById(aContainer);

            if (aContainer) {
                if (!aBeforeContainer)
                    aContainer.appendChild(el);
                else
                    aContainer.insertBefore(el, aBeforeContainer);
            }

            return el;
        };
        
        self.getElement = function(aType, aClass, aContainer, aID, aBeforeContainer) {
            var d = document.getElementById(aID)
            if (d) {
                return d;
            } else
                return self.createElement(aType, aClass, aContainer, aID, aBeforeContainer)
        };

        self.getElem = function(el) {
            var d;
            d = document.getElementById(el);
            if (d)
                return d;
            d = document.getElementsByClassName(el);
            if (d[0])
                return d[0];
            d = document.getElementsByTagName(el);
            if (d[0])
                return d[0];
            if (el.ATTRIBUTE_NODE)
                return el;
            return el;
        };
        
//        self.getElement = function(aType, aClass, aContainer, aID, aBeforeContainer) {
//            var d = document.getElementById(aID);
//            if (d) {
//                return d;
//            } else
//                return self.createElement(aType, aClass, aContainer, aID, aBeforeContainer)
//        };


        self.deleteElement = function(anElement) {
            var el = self.getElem(anElement);
            el.parentNode.removeChild(el);
        };
        
        self.show = function(anElement) {
            
        };
        
        self.hide = function(anElement) {
            
        };
    };
});

