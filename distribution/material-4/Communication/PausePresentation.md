# PausePresentation


```text
material-4/Communication/PausePresentation
```

```text
include('material-4/Communication/PausePresentation')
```



| Illustration | PausePresentation |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/PausePresentation.png) | ![illustration for PausePresentation](../../material-4/Communication/PausePresentation.Local.png) |




## PausePresentation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PausePresentation
include('material-4/Communication/PausePresentation')

' renders the element
PausePresentation('PausePresentation', 'Pause Presentation', 'an optional tech label')
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

' loads the Item which embeds the element PausePresentation
include('material-4/Communication/PausePresentation')

' renders the element
PausePresentation('PausePresentation', 'Pause Presentation', 'an optional tech label')
@enduml
```

