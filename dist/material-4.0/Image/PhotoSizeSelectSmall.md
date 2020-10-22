# Photo Size Select Small

```text
material-4.0/Image/PhotoSizeSelectSmall
```

```text
include('material-4.0/Image/PhotoSizeSelectSmall')
```

|icon|element|
|---|---|
|![](PhotoSizeSelectSmall.png)|![](PhotoSizeSelectSmall.element.png)|



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
' loads the PhotoSizeSelectSmall element
include('material-4.0/Image/PhotoSizeSelectSmall')
PhotoSizeSelectSmall('photo_size_select_small', 'Photo Size Select Small', 'an optional tech field')
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
' loads the PhotoSizeSelectSmall element
include('material-4.0/Image/PhotoSizeSelectSmall')
PhotoSizeSelectSmall('photo_size_select_small', 'Photo Size Select Small', 'an optional tech field')
@enduml
```

