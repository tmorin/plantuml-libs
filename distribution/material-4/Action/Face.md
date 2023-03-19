# Face


```text
material-4/Action/Face
```

```text
include('material-4/Action/Face')
```



| Illustration | Face |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Face.png) | ![illustration for Face](../../material-4/Action/Face.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FaceXs>`
- `<$FaceSm>`
- `<$FaceMd>`
- `<$FaceLg>`





## Face

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Face
include('material-4/Action/Face')

' renders the element
Face('Face', 'Face', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Face
include('material-4/Action/Face')

' renders the element
Face('Face', 'Face', 'an optional tech label', 'an optional description')
@enduml
```

