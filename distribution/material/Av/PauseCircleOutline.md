# PauseCircleOutline


```text
material/Av/PauseCircleOutline
```

```text
include('material/Av/PauseCircleOutline')
```



| Illustration | PauseCircleOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/PauseCircleOutline.png) | ![illustration for PauseCircleOutline](../../material/Av/PauseCircleOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PauseCircleOutlineXs>`
- `<$PauseCircleOutlineSm>`
- `<$PauseCircleOutlineMd>`
- `<$PauseCircleOutlineLg>`





## PauseCircleOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PauseCircleOutline
include('material/Av/PauseCircleOutline')

' renders the element
PauseCircleOutline('PauseCircleOutline', 'Pause Circle Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PauseCircleOutline
include('material/Av/PauseCircleOutline')

' renders the element
PauseCircleOutline('PauseCircleOutline', 'Pause Circle Outline', 'an optional tech label', 'an optional description')
@enduml
```

