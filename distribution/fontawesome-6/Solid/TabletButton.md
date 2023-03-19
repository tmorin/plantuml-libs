# TabletButton


```text
fontawesome-6/Solid/TabletButton
```

```text
include('fontawesome-6/Solid/TabletButton')
```



| Illustration | TabletButton |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TabletButton.png) | ![illustration for TabletButton](../../fontawesome-6/Solid/TabletButton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TabletButtonXs>`
- `<$TabletButtonSm>`
- `<$TabletButtonMd>`
- `<$TabletButtonLg>`





## TabletButton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TabletButton
include('fontawesome-6/Solid/TabletButton')

' renders the element
TabletButton('TabletButton', 'Tablet Button', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TabletButton
include('fontawesome-6/Solid/TabletButton')

' renders the element
TabletButton('TabletButton', 'Tablet Button', 'an optional tech label', 'an optional description')
@enduml
```

