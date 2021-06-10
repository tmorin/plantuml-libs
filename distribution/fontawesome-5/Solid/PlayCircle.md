# PlayCircle


```text
fontawesome-5/Solid/PlayCircle
```

```text
include('fontawesome-5/Solid/PlayCircle')
```



| Illustration | PlayCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PlayCircle.png) | ![illustration for PlayCircle](../../fontawesome-5/Solid/PlayCircle.Local.png) |




## PlayCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PlayCircle
include('fontawesome-5/Solid/PlayCircle')

' renders the element
PlayCircle('PlayCircle', 'Play Circle', 'an optional tech label')
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

' loads the Item which embeds the element PlayCircle
include('fontawesome-5/Solid/PlayCircle')

' renders the element
PlayCircle('PlayCircle', 'Play Circle', 'an optional tech label')
@enduml
```

