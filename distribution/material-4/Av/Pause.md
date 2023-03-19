# Pause


```text
material-4/Av/Pause
```

```text
include('material-4/Av/Pause')
```



| Illustration | Pause |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Pause.png) | ![illustration for Pause](../../material-4/Av/Pause.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PauseXs>`
- `<$PauseSm>`
- `<$PauseMd>`
- `<$PauseLg>`





## Pause

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Pause
include('material-4/Av/Pause')

' renders the element
Pause('Pause', 'Pause', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pause
include('material-4/Av/Pause')

' renders the element
Pause('Pause', 'Pause', 'an optional tech label', 'an optional description')
@enduml
```

