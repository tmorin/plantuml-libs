# School


```text
fontawesome-5/Solid/School
```

```text
include('fontawesome-5/Solid/School')
```



| Illustration | School |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/School.png) | ![illustration for School](../../fontawesome-5/Solid/School.Local.png) |




## School

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element School
include('fontawesome-5/Solid/School')

' renders the element
School('School', 'School', 'an optional tech label')
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

' loads the Item which embeds the element School
include('fontawesome-5/Solid/School')

' renders the element
School('School', 'School', 'an optional tech label')
@enduml
```

