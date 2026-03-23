# PlayCircle


```text
fontawesome/Solid/PlayCircle
```

```text
include('fontawesome/Solid/PlayCircle')
```



| Illustration | PlayCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PlayCircle.png) | ![illustration for PlayCircle](../../fontawesome/Solid/PlayCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlayCircleXs>`
- `<$PlayCircleSm>`
- `<$PlayCircleMd>`
- `<$PlayCircleLg>`





## PlayCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PlayCircle
include('fontawesome/Solid/PlayCircle')

' renders the element
PlayCircle('PlayCircle', 'Play Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlayCircle
include('fontawesome/Solid/PlayCircle')

' renders the element
PlayCircle('PlayCircle', 'Play Circle', 'an optional tech label', 'an optional description')
@enduml
```

