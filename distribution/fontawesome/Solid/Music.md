# Music


```text
fontawesome/Solid/Music
```

```text
include('fontawesome/Solid/Music')
```



| Illustration | Music |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Music.png) | ![illustration for Music](../../fontawesome/Solid/Music.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MusicXs>`
- `<$MusicSm>`
- `<$MusicMd>`
- `<$MusicLg>`





## Music

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Music
include('fontawesome/Solid/Music')

' renders the element
Music('Music', 'Music', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Music
include('fontawesome/Solid/Music')

' renders the element
Music('Music', 'Music', 'an optional tech label', 'an optional description')
@enduml
```

