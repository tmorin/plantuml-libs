# AddPhotoAlternate


```text
material/Image/AddPhotoAlternate
```

```text
include('material/Image/AddPhotoAlternate')
```



| Illustration | AddPhotoAlternate |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/AddPhotoAlternate.png) | ![illustration for AddPhotoAlternate](../../material/Image/AddPhotoAlternate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddPhotoAlternateXs>`
- `<$AddPhotoAlternateSm>`
- `<$AddPhotoAlternateMd>`
- `<$AddPhotoAlternateLg>`





## AddPhotoAlternate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AddPhotoAlternate
include('material/Image/AddPhotoAlternate')

' renders the element
AddPhotoAlternate('AddPhotoAlternate', 'Add Photo Alternate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddPhotoAlternate
include('material/Image/AddPhotoAlternate')

' renders the element
AddPhotoAlternate('AddPhotoAlternate', 'Add Photo Alternate', 'an optional tech label', 'an optional description')
@enduml
```

