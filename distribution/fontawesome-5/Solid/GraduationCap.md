# GraduationCap


```text
fontawesome-5/Solid/GraduationCap
```

```text
include('fontawesome-5/Solid/GraduationCap')
```



| Illustration | GraduationCap |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/GraduationCap.png) | ![illustration for GraduationCap](../../fontawesome-5/Solid/GraduationCap.Local.png) |




## GraduationCap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element GraduationCap
include('fontawesome-5/Solid/GraduationCap')

' renders the element
GraduationCap('GraduationCap', 'Graduation Cap', 'an optional tech label')
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

' loads the Item which embeds the element GraduationCap
include('fontawesome-5/Solid/GraduationCap')

' renders the element
GraduationCap('GraduationCap', 'Graduation Cap', 'an optional tech label')
@enduml
```

