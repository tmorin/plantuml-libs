# CropRotate


```text
material-4/Image/CropRotate
```

```text
include('material-4/Image/CropRotate')
```



| Illustration | CropRotate |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/CropRotate.png) | ![illustration for CropRotate](../../material-4/Image/CropRotate.Local.png) |




## CropRotate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CropRotate
include('material-4/Image/CropRotate')

' renders the element
CropRotate('CropRotate', 'Crop Rotate', 'an optional tech label')
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

' loads the Item which embeds the element CropRotate
include('material-4/Image/CropRotate')

' renders the element
CropRotate('CropRotate', 'Crop Rotate', 'an optional tech label')
@enduml
```

