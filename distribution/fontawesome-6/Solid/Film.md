# Film


```text
fontawesome-6/Solid/Film
```

```text
include('fontawesome-6/Solid/Film')
```



| Illustration | Film |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Film.png) | ![illustration for Film](../../fontawesome-6/Solid/Film.Local.png) |




## Film

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Film
include('fontawesome-6/Solid/Film')

' renders the element
Film('Film', 'Film', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Film
include('fontawesome-6/Solid/Film')

' renders the element
Film('Film', 'Film', 'an optional tech label', 'an optional description')
@enduml
```

