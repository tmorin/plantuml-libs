# MobileScreen


```text
fontawesome/Solid/MobileScreen
```

```text
include('fontawesome/Solid/MobileScreen')
```



| Illustration | MobileScreen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/MobileScreen.png) | ![illustration for MobileScreen](../../fontawesome/Solid/MobileScreen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobileScreenXs>`
- `<$MobileScreenSm>`
- `<$MobileScreenMd>`
- `<$MobileScreenLg>`





## MobileScreen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element MobileScreen
include('fontawesome/Solid/MobileScreen')

' renders the element
MobileScreen('MobileScreen', 'Mobile Screen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MobileScreen
include('fontawesome/Solid/MobileScreen')

' renders the element
MobileScreen('MobileScreen', 'Mobile Screen', 'an optional tech label', 'an optional description')
@enduml
```

