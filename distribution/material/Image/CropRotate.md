# CropRotate


```text
material/Image/CropRotate
```

```text
include('material/Image/CropRotate')
```



| Illustration | CropRotate |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/CropRotate.png) | ![illustration for CropRotate](../../material/Image/CropRotate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CropRotateXs>`
- `<$CropRotateSm>`
- `<$CropRotateMd>`
- `<$CropRotateLg>`





## CropRotate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CropRotate
include('material/Image/CropRotate')

' renders the element
CropRotate('CropRotate', 'Crop Rotate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CropRotate
include('material/Image/CropRotate')

' renders the element
CropRotate('CropRotate', 'Crop Rotate', 'an optional tech label', 'an optional description')
@enduml
```

