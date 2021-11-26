# CropPortrait


```text
material-4/Image/CropPortrait
```

```text
include('material-4/Image/CropPortrait')
```



| Illustration | CropPortrait |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/CropPortrait.png) | ![illustration for CropPortrait](../../material-4/Image/CropPortrait.Local.png) |




## CropPortrait

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CropPortrait
include('material-4/Image/CropPortrait')

' renders the element
CropPortrait('CropPortrait', 'Crop Portrait', 'an optional tech label')
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

' loads the Item which embeds the element CropPortrait
include('material-4/Image/CropPortrait')

' renders the element
CropPortrait('CropPortrait', 'Crop Portrait', 'an optional tech label')
@enduml
```

