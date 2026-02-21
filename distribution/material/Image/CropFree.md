# CropFree


```text
material/Image/CropFree
```

```text
include('material/Image/CropFree')
```



| Illustration | CropFree |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/CropFree.png) | ![illustration for CropFree](../../material/Image/CropFree.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CropFreeXs>`
- `<$CropFreeSm>`
- `<$CropFreeMd>`
- `<$CropFreeLg>`





## CropFree

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CropFree
include('material/Image/CropFree')

' renders the element
CropFree('CropFree', 'Crop Free', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CropFree
include('material/Image/CropFree')

' renders the element
CropFree('CropFree', 'Crop Free', 'an optional tech label', 'an optional description')
@enduml
```

