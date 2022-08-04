# HandBackFist


```text
fontawesome-6/Solid/HandBackFist
```

```text
include('fontawesome-6/Solid/HandBackFist')
```



| Illustration | HandBackFist |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandBackFist.png) | ![illustration for HandBackFist](../../fontawesome-6/Solid/HandBackFist.Local.png) |




## HandBackFist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandBackFist
include('fontawesome-6/Solid/HandBackFist')

' renders the element
HandBackFist('HandBackFist', 'Hand Back Fist', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandBackFist
include('fontawesome-6/Solid/HandBackFist')

' renders the element
HandBackFist('HandBackFist', 'Hand Back Fist', 'an optional tech label', 'an optional description')
@enduml
```

