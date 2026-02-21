# CropDin


```text
material/Image/CropDin
```

```text
include('material/Image/CropDin')
```



| Illustration | CropDin |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/CropDin.png) | ![illustration for CropDin](../../material/Image/CropDin.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CropDinXs>`
- `<$CropDinSm>`
- `<$CropDinMd>`
- `<$CropDinLg>`





## CropDin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CropDin
include('material/Image/CropDin')

' renders the element
CropDin('CropDin', 'Crop Din', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CropDin
include('material/Image/CropDin')

' renders the element
CropDin('CropDin', 'Crop Din', 'an optional tech label', 'an optional description')
@enduml
```

