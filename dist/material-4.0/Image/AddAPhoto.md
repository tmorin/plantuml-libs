# Add A Photo

```text
material-4.0/Image/AddAPhoto
```

```text
include('material-4.0/Image/AddAPhoto')
```

|icon|element|
|---|---|
|![](AddAPhoto.png)|![](AddAPhoto.element.png)|



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
' loads the AddAPhoto element
include('material-4.0/Image/AddAPhoto')
AddAPhoto('add_a_photo', 'Add A Photo', 'an optional tech field')
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
' loads the AddAPhoto element
include('material-4.0/Image/AddAPhoto')
AddAPhoto('add_a_photo', 'Add A Photo', 'an optional tech field')
@enduml
```

