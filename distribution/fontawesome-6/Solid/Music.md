# Music


```text
fontawesome-6/Solid/Music
```

```text
include('fontawesome-6/Solid/Music')
```



| Illustration | Music |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Music.png) | ![illustration for Music](../../fontawesome-6/Solid/Music.Local.png) |




## Music

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Music
include('fontawesome-6/Solid/Music')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Music
include('fontawesome-6/Solid/Music')

' renders the element
Music('Music', 'Music', 'an optional tech label')
@enduml
```

