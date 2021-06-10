# Film


```text
fontawesome-5/Solid/Film
```

```text
include('fontawesome-5/Solid/Film')
```



| Illustration | Film |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Film.png) | ![illustration for Film](../../fontawesome-5/Solid/Film.Local.png) |




## Film

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Film
include('fontawesome-5/Solid/Film')

' renders the element
Film('Film', 'Film', 'an optional tech label')
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

' loads the Item which embeds the element Film
include('fontawesome-5/Solid/Film')

' renders the element
Film('Film', 'Film', 'an optional tech label')
@enduml
```

