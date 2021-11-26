# Games


```text
material-4/Av/Games
```

```text
include('material-4/Av/Games')
```



| Illustration | Games |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Games.png) | ![illustration for Games](../../material-4/Av/Games.Local.png) |




## Games

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Games
include('material-4/Av/Games')

' renders the element
Games('Games', 'Games', 'an optional tech label')
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

' loads the Item which embeds the element Games
include('material-4/Av/Games')

' renders the element
Games('Games', 'Games', 'an optional tech label')
@enduml
```

