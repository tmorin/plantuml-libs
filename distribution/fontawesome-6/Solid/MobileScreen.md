# MobileScreen


```text
fontawesome-6/Solid/MobileScreen
```

```text
include('fontawesome-6/Solid/MobileScreen')
```



| Illustration | MobileScreen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MobileScreen.png) | ![illustration for MobileScreen](../../fontawesome-6/Solid/MobileScreen.Local.png) |




## MobileScreen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MobileScreen
include('fontawesome-6/Solid/MobileScreen')

' renders the element
MobileScreen('MobileScreen', 'Mobile Screen', 'an optional tech label')
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

' loads the Item which embeds the element MobileScreen
include('fontawesome-6/Solid/MobileScreen')

' renders the element
MobileScreen('MobileScreen', 'Mobile Screen', 'an optional tech label')
@enduml
```

