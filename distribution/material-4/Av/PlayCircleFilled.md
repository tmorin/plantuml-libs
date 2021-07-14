# PlayCircleFilled


```text
material-4/Av/PlayCircleFilled
```

```text
include('material-4/Av/PlayCircleFilled')
```



| Illustration | PlayCircleFilled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/PlayCircleFilled.png) | ![illustration for PlayCircleFilled](../../material-4/Av/PlayCircleFilled.Local.png) |




## PlayCircleFilled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PlayCircleFilled
include('material-4/Av/PlayCircleFilled')

' renders the element
PlayCircleFilled('PlayCircleFilled', 'Play Circle Filled', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element PlayCircleFilled
include('material-4/Av/PlayCircleFilled')

' renders the element
PlayCircleFilled('PlayCircleFilled', 'Play Circle Filled', 'an optional tech label')
@enduml
```

