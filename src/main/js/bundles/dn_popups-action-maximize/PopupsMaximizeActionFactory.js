/*
 * Copyright (C) 2025 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default class PopupsMaximizeActionFactory {

    #maximize = false;
    #defaultDockingForced = false;

    createAction(type) {
        const i18n = this._i18n.get().ui;
        const that = this;
        const popupsConfig = this._popupsConfig;
        const properties = this._properties;
        return {
            id: properties.id,
            type: "button",
            title: i18n.maximize,
            className: properties.iconClass,
            trigger(context) {
                const popup = that._mapWidgetModel.view.popup;
                const visibleWatcher = popup.watch("visible", (value) => {
                    if(!value) {
                        visibleWatcher.remove();
                        that.#maximize = false;
                        popupsConfig.dockingForced = that.#defaultDockingForced;
                        popupsConfig.applyTo(popup);
                    }
                });

                const element = document.querySelector(".esri-popup__main-container");

                if(that.#maximize) {
                    context.action.title = i18n.maximize;
                    context.action.className = "esri-icon-maximize";
                    element.classList.remove("maximize");
                    that.#maximize = false;
                    popupsConfig.dockingForced = that.#defaultDockingForced;
                } else {
                    context.action.title = i18n.minimize;
                    context.action.className = "esri-icon-minimize";
                    element.classList.add("maximize");
                    that.#maximize = true;
                    that.#defaultDockingForced = popupsConfig.dockingForced;
                    popupsConfig.dockingForced = true;
                }
                popupsConfig.applyTo(popup);
            }
        };
    }

    getTypes() {
        return [this._properties.id];
    }

}
