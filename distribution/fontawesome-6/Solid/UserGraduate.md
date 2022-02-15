# UserGraduate


```text
fontawesome-6/Solid/UserGraduate
```

```text
include('fontawesome-6/Solid/UserGraduate')
```



| Illustration | UserGraduate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserGraduate.png) | ![illustration for UserGraduate](../../fontawesome-6/Solid/UserGraduate.Local.png) |




## UserGraduate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserGraduate
include('fontawesome-6/Solid/UserGraduate')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserGraduate
include('fontawesome-6/Solid/UserGraduate')

' renders the element
UserGraduate('UserGraduate', 'User Graduate', 'an optional tech label')
@enduml
```

