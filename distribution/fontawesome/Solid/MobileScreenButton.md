# MobileScreenButton


```text
fontawesome/Solid/MobileScreenButton
```

```text
include('fontawesome/Solid/MobileScreenButton')
```



| Illustration | MobileScreenButton |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MobileScreenButton.png) | ![illustration for MobileScreenButton](../../fontawesome/Solid/MobileScreenButton.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobileScreenButtonXs>`
- `<$MobileScreenButtonSm>`
- `<$MobileScreenButtonMd>`
- `<$MobileScreenButtonLg>`





## MobileScreenButton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MobileScreenButton
include('fontawesome/Solid/MobileScreenButton')

' renders the element
MobileScreenButton('MobileScreenButton', 'Mobile Screen Button', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MobileScreenButton
include('fontawesome/Solid/MobileScreenButton')

' renders the element
MobileScreenButton('MobileScreenButton', 'Mobile Screen Button', 'an optional tech label', 'an optional description')
@enduml
```

