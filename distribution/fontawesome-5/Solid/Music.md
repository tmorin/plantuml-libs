# Music


```text
fontawesome-5/Solid/Music
```

```text
include('fontawesome-5/Solid/Music')
```



| Illustration | Music |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Music.png) | ![illustration for Music](../../fontawesome-5/Solid/Music.Local.png) |




## Music

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Music
include('fontawesome-5/Solid/Music')

' renders the element
Music('Music', 'Music', 'an optional tech label')
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

' loads the Item which embeds the element Music
include('fontawesome-5/Solid/Music')

' renders the element
Music('Music', 'Music', 'an optional tech label')
@enduml
```

