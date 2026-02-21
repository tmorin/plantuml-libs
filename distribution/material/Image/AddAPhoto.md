# AddAPhoto


```text
material/Image/AddAPhoto
```

```text
include('material/Image/AddAPhoto')
```



| Illustration | AddAPhoto |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/AddAPhoto.png) | ![illustration for AddAPhoto](../../material/Image/AddAPhoto.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddAPhotoXs>`
- `<$AddAPhotoSm>`
- `<$AddAPhotoMd>`
- `<$AddAPhotoLg>`





## AddAPhoto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AddAPhoto
include('material/Image/AddAPhoto')

' renders the element
AddAPhoto('AddAPhoto', 'Add A Photo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddAPhoto
include('material/Image/AddAPhoto')

' renders the element
AddAPhoto('AddAPhoto', 'Add A Photo', 'an optional tech label', 'an optional description')
@enduml
```

