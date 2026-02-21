# TagFaces


```text
material/Image/TagFaces
```

```text
include('material/Image/TagFaces')
```



| Illustration | TagFaces |
| :---: | :---: |
| ![illustration for Illustration](../../material/Image/TagFaces.png) | ![illustration for TagFaces](../../material/Image/TagFaces.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TagFacesXs>`
- `<$TagFacesSm>`
- `<$TagFacesMd>`
- `<$TagFacesLg>`





## TagFaces

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TagFaces
include('material/Image/TagFaces')

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
include('material/bootstrap')

' loads the Item which embeds the element TagFaces
include('material/Image/TagFaces')

' renders the element
TagFaces('TagFaces', 'Tag Faces', 'an optional tech label', 'an optional description')
@enduml
```

