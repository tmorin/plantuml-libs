# MartiniGlass


```text
fontawesome-6/Solid/MartiniGlass
```

```text
include('fontawesome-6/Solid/MartiniGlass')
```



| Illustration | MartiniGlass |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MartiniGlass.png) | ![illustration for MartiniGlass](../../fontawesome-6/Solid/MartiniGlass.Local.png) |




## MartiniGlass

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MartiniGlass
include('fontawesome-6/Solid/MartiniGlass')

' renders the element
MartiniGlass('MartiniGlass', 'Martini Glass', 'an optional tech label')
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

' loads the Item which embeds the element MartiniGlass
include('fontawesome-6/Solid/MartiniGlass')

' renders the element
MartiniGlass('MartiniGlass', 'Martini Glass', 'an optional tech label')
@enduml
```

