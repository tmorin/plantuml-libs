# UserGraduate


```text
fontawesome/Solid/UserGraduate
```

```text
include('fontawesome/Solid/UserGraduate')
```



| Illustration | UserGraduate |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserGraduate.png) | ![illustration for UserGraduate](../../fontawesome/Solid/UserGraduate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserGraduateXs>`
- `<$UserGraduateSm>`
- `<$UserGraduateMd>`
- `<$UserGraduateLg>`





## UserGraduate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserGraduate
include('fontawesome/Solid/UserGraduate')

' renders the element
UserGraduate('UserGraduate', 'User Graduate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserGraduate
include('fontawesome/Solid/UserGraduate')

' renders the element
UserGraduate('UserGraduate', 'User Graduate', 'an optional tech label', 'an optional description')
@enduml
```

