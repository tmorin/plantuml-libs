# HandFist


```text
fontawesome-6/Solid/HandFist
```

```text
include('fontawesome-6/Solid/HandFist')
```



| Illustration | HandFist |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandFist.png) | ![illustration for HandFist](../../fontawesome-6/Solid/HandFist.Local.png) |




## HandFist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandFist
include('fontawesome-6/Solid/HandFist')

' renders the element
HandFist('HandFist', 'Hand Fist', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandFist
include('fontawesome-6/Solid/HandFist')

' renders the element
HandFist('HandFist', 'Hand Fist', 'an optional tech label', 'an optional description')
@enduml
```

