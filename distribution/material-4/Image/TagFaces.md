# TagFaces


```text
material-4/Image/TagFaces
```

```text
include('material-4/Image/TagFaces')
```



| Illustration | TagFaces |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/TagFaces.png) | ![illustration for TagFaces](../../material-4/Image/TagFaces.Local.png) |




## TagFaces

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TagFaces
include('material-4/Image/TagFaces')

' renders the element
TagFaces('TagFaces', 'Tag Faces', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TagFaces
include('material-4/Image/TagFaces')

' renders the element
TagFaces('TagFaces', 'Tag Faces', 'an optional tech label', 'an optional description')
@enduml
```

