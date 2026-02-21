# Open3D


```text
simpleicons-14/O/Open3D
```

```text
include('simpleicons-14/O/Open3D')
```



| Illustration | Open3D |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Open3D.png) | ![illustration for Open3D](../../simpleicons-14/O/Open3D.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Open3DXs>`
- `<$Open3DSm>`
- `<$Open3DMd>`
- `<$Open3DLg>`





## Open3D

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Open3D
include('simpleicons-14/O/Open3D')

' renders the element
Open3D('Open3D', 'Open3 D', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Open3D
include('simpleicons-14/O/Open3D')

' renders the element
Open3D('Open3D', 'Open3 D', 'an optional tech label', 'an optional description')
@enduml
```

