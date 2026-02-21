# CameraRoll


```text
material/Image/CameraRoll
```

```text
include('material/Image/CameraRoll')
```



| Illustration | CameraRoll |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/CameraRoll.png) | ![illustration for CameraRoll](../../material/Image/CameraRoll.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CameraRollXs>`
- `<$CameraRollSm>`
- `<$CameraRollMd>`
- `<$CameraRollLg>`





## CameraRoll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CameraRoll
include('material/Image/CameraRoll')

' renders the element
CameraRoll('CameraRoll', 'Camera Roll', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CameraRoll
include('material/Image/CameraRoll')

' renders the element
CameraRoll('CameraRoll', 'Camera Roll', 'an optional tech label', 'an optional description')
@enduml
```

