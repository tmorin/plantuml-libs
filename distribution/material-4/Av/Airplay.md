# Airplay


```text
material-4/Av/Airplay
```

```text
include('material-4/Av/Airplay')
```



| Illustration | Airplay |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Airplay.png) | ![illustration for Airplay](../../material-4/Av/Airplay.Local.png) |




## Airplay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Airplay
include('material-4/Av/Airplay')

' renders the element
Airplay('Airplay', 'Airplay', 'an optional tech label')
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

' loads the Item which embeds the element Airplay
include('material-4/Av/Airplay')

' renders the element
Airplay('Airplay', 'Airplay', 'an optional tech label')
@enduml
```

