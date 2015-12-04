/// <reference path="../typings/knockout/knockout.d.ts" />
import ko = require('knockout');

class PersonViewModel {
    public firstName = ko.observable<string>();
    public lastName = ko.observable<string>();
}

export = PersonViewModel;