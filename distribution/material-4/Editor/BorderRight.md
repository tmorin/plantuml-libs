# BorderRight


```text
material-4/Editor/BorderRight
```

```text
include('material-4/Editor/BorderRight')
```



| Illustration | BorderRight |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/BorderRight.png) | ![illustration for BorderRight](../../material-4/Editor/BorderRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorderRightXs>`
- `<$BorderRightSm>`
- `<$BorderRightMd>`
- `<$BorderRightLg>`





## BorderRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BorderRight
include('material-4/Editor/BorderRight')

' renders the element
BorderRight('BorderRight', 'Border Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BorderRight
include('material-4/Editor/BorderRight')

' renders the element
BorderRight('BorderRight', 'Border Right', 'an optional tech label', 'an optional description')
@enduml
```

