# TabletScreenButton


```text
fontawesome/Solid/TabletScreenButton
```

```text
include('fontawesome/Solid/TabletScreenButton')
```



| Illustration | TabletScreenButton |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TabletScreenButton.png) | ![illustration for TabletScreenButton](../../fontawesome/Solid/TabletScreenButton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TabletScreenButtonXs>`
- `<$TabletScreenButtonSm>`
- `<$TabletScreenButtonMd>`
- `<$TabletScreenButtonLg>`





## TabletScreenButton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TabletScreenButton
include('fontawesome/Solid/TabletScreenButton')

' renders the element
TabletScreenButton('TabletScreenButton', 'Tablet Screen Button', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TabletScreenButton
include('fontawesome/Solid/TabletScreenButton')

' renders the element
TabletScreenButton('TabletScreenButton', 'Tablet Screen Button', 'an optional tech label', 'an optional description')
@enduml
```

