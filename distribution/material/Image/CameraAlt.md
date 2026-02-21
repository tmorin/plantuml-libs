# CameraAlt


```text
material/Image/CameraAlt
```

```text
include('material/Image/CameraAlt')
```



| Illustration | CameraAlt |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/CameraAlt.png) | ![illustration for CameraAlt](../../material/Image/CameraAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CameraAltXs>`
- `<$CameraAltSm>`
- `<$CameraAltMd>`
- `<$CameraAltLg>`





## CameraAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CameraAlt
include('material/Image/CameraAlt')

' renders the element
CameraAlt('CameraAlt', 'Camera Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CameraAlt
include('material/Image/CameraAlt')

' renders the element
CameraAlt('CameraAlt', 'Camera Alt', 'an optional tech label', 'an optional description')
@enduml
```

