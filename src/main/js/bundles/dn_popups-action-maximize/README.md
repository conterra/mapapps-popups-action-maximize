# dn_popups-action-maximize

This bundle adds a new action to maximize a popup.

## Usage

1. Add the bundle "dn_popups-action-maximize" to your app.
2. Use the custom action _maximize-popup_

```
"bundles": {
    "map-init": {
        "Config": {
            "map": {
                "layers": [
                    {
                        ...
                        "popupTemplate": {
                            "customActions": ["maximize-popup"]
                        }
                    }
                ]
            }
        }
    }
}
```

## Configuration Reference

### Config

No configuration needed.
