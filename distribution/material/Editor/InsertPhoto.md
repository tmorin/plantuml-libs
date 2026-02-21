# InsertPhoto


```text
material/Editor/InsertPhoto
```

```text
include('material/Editor/InsertPhoto')
```



| Illustration | InsertPhoto |
| :---: | :---: |
| ![illustration for Illustration](../../material/Editor/InsertPhoto.png) | ![illustration for InsertPhoto](../../material/Editor/InsertPhoto.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InsertPhotoXs>`
- `<$InsertPhotoSm>`
- `<$InsertPhotoMd>`
- `<$InsertPhotoLg>`





## InsertPhoto

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element InsertPhoto
include('material/Editor/InsertPhoto')

' renders the element
InsertPhoto('InsertPhoto', 'Insert Photo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InsertPhoto
include('material/Editor/InsertPhoto')

' renders the element
InsertPhoto('InsertPhoto', 'Insert Photo', 'an optional tech label', 'an optional description')
@enduml
```

