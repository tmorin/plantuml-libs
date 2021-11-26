# AddToPhotos


```text
material-4/Image/AddToPhotos
```

```text
include('material-4/Image/AddToPhotos')
```



| Illustration | AddToPhotos |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/AddToPhotos.png) | ![illustration for AddToPhotos](../../material-4/Image/AddToPhotos.Local.png) |




## AddToPhotos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddToPhotos
include('material-4/Image/AddToPhotos')

' renders the element
AddToPhotos('AddToPhotos', 'Add To Photos', 'an optional tech label')
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

' loads the Item which embeds the element AddToPhotos
include('material-4/Image/AddToPhotos')

' renders the element
AddToPhotos('AddToPhotos', 'Add To Photos', 'an optional tech label')
@enduml
```

