# PausePresentation


```text
material/Communication/PausePresentation
```

```text
include('material/Communication/PausePresentation')
```



| Illustration | PausePresentation |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/PausePresentation.png) | ![illustration for PausePresentation](../../material/Communication/PausePresentation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PausePresentationXs>`
- `<$PausePresentationSm>`
- `<$PausePresentationMd>`
- `<$PausePresentationLg>`





## PausePresentation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PausePresentation
include('material/Communication/PausePresentation')

' renders the element
PausePresentation('PausePresentation', 'Pause Presentation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PausePresentation
include('material/Communication/PausePresentation')

' renders the element
PausePresentation('PausePresentation', 'Pause Presentation', 'an optional tech label', 'an optional description')
@enduml
```

