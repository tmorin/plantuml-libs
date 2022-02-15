# MartiniGlassEmpty


```text
fontawesome-6/Solid/MartiniGlassEmpty
```

```text
include('fontawesome-6/Solid/MartiniGlassEmpty')
```



| Illustration | MartiniGlassEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MartiniGlassEmpty.png) | ![illustration for MartiniGlassEmpty](../../fontawesome-6/Solid/MartiniGlassEmpty.Local.png) |




## MartiniGlassEmpty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MartiniGlassEmpty
include('fontawesome-6/Solid/MartiniGlassEmpty')

' renders the element
MartiniGlassEmpty('MartiniGlassEmpty', 'Martini Glass Empty', 'an optional tech label')
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

' loads the Item which embeds the element MartiniGlassEmpty
include('fontawesome-6/Solid/MartiniGlassEmpty')

' renders the element
MartiniGlassEmpty('MartiniGlassEmpty', 'Martini Glass Empty', 'an optional tech label')
@enduml
```

