# ChalkboardTeacher


```text
fontawesome-5/Solid/ChalkboardTeacher
```

```text
include('fontawesome-5/Solid/ChalkboardTeacher')
```



| Illustration | ChalkboardTeacher |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ChalkboardTeacher.png) | ![illustration for ChalkboardTeacher](../../fontawesome-5/Solid/ChalkboardTeacher.Local.png) |




## ChalkboardTeacher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ChalkboardTeacher
include('fontawesome-5/Solid/ChalkboardTeacher')

' renders the element
ChalkboardTeacher('ChalkboardTeacher', 'Chalkboard Teacher', 'an optional tech label')
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

' loads the Item which embeds the element ChalkboardTeacher
include('fontawesome-5/Solid/ChalkboardTeacher')

' renders the element
ChalkboardTeacher('ChalkboardTeacher', 'Chalkboard Teacher', 'an optional tech label')
@enduml
```

