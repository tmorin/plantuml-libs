# Speed


```text
material-4/Av/Speed
```

```text
include('material-4/Av/Speed')
```



| Illustration | Speed |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Speed.png) | ![illustration for Speed](../../material-4/Av/Speed.Local.png) |




## Speed

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Speed
include('material-4/Av/Speed')

' renders the element
Speed('Speed', 'Speed', 'an optional tech label')
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

' loads the Item which embeds the element Speed
include('material-4/Av/Speed')

' renders the element
Speed('Speed', 'Speed', 'an optional tech label')
@enduml
```

