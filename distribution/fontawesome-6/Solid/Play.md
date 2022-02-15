# Play


```text
fontawesome-6/Solid/Play
```

```text
include('fontawesome-6/Solid/Play')
```



| Illustration | Play |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Play.png) | ![illustration for Play](../../fontawesome-6/Solid/Play.Local.png) |




## Play

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Play
include('fontawesome-6/Solid/Play')

' renders the element
Play('Play', 'Play', 'an optional tech label')
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

' loads the Item which embeds the element Play
include('fontawesome-6/Solid/Play')

' renders the element
Play('Play', 'Play', 'an optional tech label')
@enduml
```

