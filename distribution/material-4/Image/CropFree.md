# CropFree


```text
material-4/Image/CropFree
```

```text
include('material-4/Image/CropFree')
```



| Illustration | CropFree |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/CropFree.png) | ![illustration for CropFree](../../material-4/Image/CropFree.Local.png) |



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
include('material-4/bootstrap')

' loads the Item which embeds the element CropFree
include('material-4/Image/CropFree')

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
include('material-4/bootstrap')

' loads the Item which embeds the element CropFree
include('material-4/Image/CropFree')

' renders the element
CropFree('CropFree', 'Crop Free', 'an optional tech label', 'an optional description')
@enduml
```

