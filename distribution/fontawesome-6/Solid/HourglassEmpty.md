# HourglassEmpty


```text
fontawesome-6/Solid/HourglassEmpty
```

```text
include('fontawesome-6/Solid/HourglassEmpty')
```



| Illustration | HourglassEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HourglassEmpty.png) | ![illustration for HourglassEmpty](../../fontawesome-6/Solid/HourglassEmpty.Local.png) |




## HourglassEmpty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HourglassEmpty
include('fontawesome-6/Solid/HourglassEmpty')

' renders the element
HourglassEmpty('HourglassEmpty', 'Hourglass Empty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HourglassEmpty
include('fontawesome-6/Solid/HourglassEmpty')

' renders the element
HourglassEmpty('HourglassEmpty', 'Hourglass Empty', 'an optional tech label', 'an optional description')
@enduml
```

