# FitScreen


```text
material/Action/FitScreen
```

```text
include('material/Action/FitScreen')
```



| Illustration | FitScreen |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/FitScreen.png) | ![illustration for FitScreen](../../material/Action/FitScreen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FitScreenXs>`
- `<$FitScreenSm>`
- `<$FitScreenMd>`
- `<$FitScreenLg>`





## FitScreen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FitScreen
include('material/Action/FitScreen')

' renders the element
FitScreen('FitScreen', 'Fit Screen', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element FitScreen
include('material/Action/FitScreen')

' renders the element
FitScreen('FitScreen', 'Fit Screen', 'an optional tech label', 'an optional description')
@enduml
```

