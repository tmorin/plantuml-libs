# Photo Size Select Actual

```text
material-4.0/Image/PhotoSizeSelectActual
```

```text
include('material-4.0/Image/PhotoSizeSelectActual')
```

|icon|element|
|---|---|
|![](PhotoSizeSelectActual.png)|![](PhotoSizeSelectActual.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the PhotoSizeSelectActual element
include('material-4.0/Image/PhotoSizeSelectActual')
PhotoSizeSelectActual('photo_size_select_actual', 'Photo Size Select Actual', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the PhotoSizeSelectActual element
include('material-4.0/Image/PhotoSizeSelectActual')
PhotoSizeSelectActual('photo_size_select_actual', 'Photo Size Select Actual', 'an optional tech field')
@enduml
```

