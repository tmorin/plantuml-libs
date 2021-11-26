# GrinBeamSweat


```text
fontawesome-5/Solid/GrinBeamSweat
```

```text
include('fontawesome-5/Solid/GrinBeamSweat')
```



| Illustration | GrinBeamSweat |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GrinBeamSweat.png) | ![illustration for GrinBeamSweat](../../fontawesome-5/Solid/GrinBeamSweat.Local.png) |




## GrinBeamSweat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinBeamSweat
include('fontawesome-5/Solid/GrinBeamSweat')

' renders the element
GrinBeamSweat('GrinBeamSweat', 'Grin Beam Sweat', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GrinBeamSweat
include('fontawesome-5/Solid/GrinBeamSweat')

' renders the element
GrinBeamSweat('GrinBeamSweat', 'Grin Beam Sweat', 'an optional tech label')
@enduml
```

