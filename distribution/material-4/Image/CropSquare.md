# CropSquare


```text
material-4/Image/CropSquare
```

```text
include('material-4/Image/CropSquare')
```



| Illustration | CropSquare |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/CropSquare.png) | ![illustration for CropSquare](../../material-4/Image/CropSquare.Local.png) |




## CropSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CropSquare
include('material-4/Image/CropSquare')

' renders the element
CropSquare('CropSquare', 'Crop Square', 'an optional tech label')
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

' loads the Item which embeds the element CropSquare
include('material-4/Image/CropSquare')

' renders the element
CropSquare('CropSquare', 'Crop Square', 'an optional tech label')
@enduml
```

