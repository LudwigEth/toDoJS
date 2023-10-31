import './style.css';
import { settingsButton, settingsDialog } from './modules/settings.js';
import {
    addClickEventListener,
    removeClickEventListener,
    settingsButtonClickHandler,
    documentOpenSettingsDialogClickHandler
} from './modules/event-handlers.js';


addClickEventListener(settingsButton, settingsButtonClickHandler);