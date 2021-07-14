# AddAPhoto


```text
material-4/Image/AddAPhoto
```

```text
include('material-4/Image/AddAPhoto')
```



| Illustration | AddAPhoto |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/AddAPhoto.png) | ![illustration for AddAPhoto](../../material-4/Image/AddAPhoto.Local.png) |




## AddAPhoto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddAPhoto
include('material-4/Image/AddAPhoto')

' renders the element
AddAPhoto('AddAPhoto', 'Add A Photo', 'an optional tech label')
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

' loads the Item which embeds the element AddAPhoto
include('material-4/Image/AddAPhoto')

' renders the element
AddAPhoto('AddAPhoto', 'Add A Photo', 'an optional tech label')
@enduml
```

