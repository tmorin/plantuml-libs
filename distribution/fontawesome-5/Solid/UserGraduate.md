# UserGraduate


```text
fontawesome-5/Solid/UserGraduate
```

```text
include('fontawesome-5/Solid/UserGraduate')
```



| Illustration | UserGraduate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserGraduate.png) | ![illustration for UserGraduate](../../fontawesome-5/Solid/UserGraduate.Local.png) |




## UserGraduate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserGraduate
include('fontawesome-5/Solid/UserGraduate')

' renders the element
UserGraduate('UserGraduate', 'User Graduate', 'an optional tech label')
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

' loads the Item which embeds the element UserGraduate
include('fontawesome-5/Solid/UserGraduate')

' renders the element
UserGraduate('UserGraduate', 'User Graduate', 'an optional tech label')
@enduml
```

