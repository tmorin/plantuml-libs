# CropOriginal


```text
material/Image/CropOriginal
```

```text
include('material/Image/CropOriginal')
```



| Illustration | CropOriginal |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/CropOriginal.png) | ![illustration for CropOriginal](../../material/Image/CropOriginal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CropOriginalXs>`
- `<$CropOriginalSm>`
- `<$CropOriginalMd>`
- `<$CropOriginalLg>`





## CropOriginal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CropOriginal
include('material/Image/CropOriginal')

' renders the element
CropOriginal('CropOriginal', 'Crop Original', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CropOriginal
include('material/Image/CropOriginal')

' renders the element
CropOriginal('CropOriginal', 'Crop Original', 'an optional tech label', 'an optional description')
@enduml
```

