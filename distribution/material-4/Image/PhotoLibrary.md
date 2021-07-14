# PhotoLibrary


```text
material-4/Image/PhotoLibrary
```

```text
include('material-4/Image/PhotoLibrary')
```



| Illustration | PhotoLibrary |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/PhotoLibrary.png) | ![illustration for PhotoLibrary](../../material-4/Image/PhotoLibrary.Local.png) |




## PhotoLibrary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PhotoLibrary
include('material-4/Image/PhotoLibrary')

' renders the element
PhotoLibrary('PhotoLibrary', 'Photo Library', 'an optional tech label')
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

' loads the Item which embeds the element PhotoLibrary
include('material-4/Image/PhotoLibrary')

' renders the element
PhotoLibrary('PhotoLibrary', 'Photo Library', 'an optional tech label')
@enduml
```

