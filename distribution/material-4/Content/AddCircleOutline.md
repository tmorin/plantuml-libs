# AddCircleOutline


```text
material-4/Content/AddCircleOutline
```

```text
include('material-4/Content/AddCircleOutline')
```



| Illustration | AddCircleOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/AddCircleOutline.png) | ![illustration for AddCircleOutline](../../material-4/Content/AddCircleOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddCircleOutlineXs>`
- `<$AddCircleOutlineSm>`
- `<$AddCircleOutlineMd>`
- `<$AddCircleOutlineLg>`





## AddCircleOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddCircleOutline
include('material-4/Content/AddCircleOutline')

' renders the element
AddCircleOutline('AddCircleOutline', 'Add Circle Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddCircleOutline
include('material-4/Content/AddCircleOutline')

' renders the element
AddCircleOutline('AddCircleOutline', 'Add Circle Outline', 'an optional tech label', 'an optional description')
@enduml
```

