# ChalkboardTeacher


```text
fontawesome/Solid/ChalkboardTeacher
```

```text
include('fontawesome/Solid/ChalkboardTeacher')
```



| Illustration | ChalkboardTeacher |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChalkboardTeacher.png) | ![illustration for ChalkboardTeacher](../../fontawesome/Solid/ChalkboardTeacher.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChalkboardTeacherXs>`
- `<$ChalkboardTeacherSm>`
- `<$ChalkboardTeacherMd>`
- `<$ChalkboardTeacherLg>`





## ChalkboardTeacher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChalkboardTeacher
include('fontawesome/Solid/ChalkboardTeacher')

' renders the element
ChalkboardTeacher('ChalkboardTeacher', 'Chalkboard Teacher', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChalkboardTeacher
include('fontawesome/Solid/ChalkboardTeacher')

' renders the element
ChalkboardTeacher('ChalkboardTeacher', 'Chalkboard Teacher', 'an optional tech label', 'an optional description')
@enduml
```

