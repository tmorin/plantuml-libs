# DeleteOutline


```text
material/Action/DeleteOutline
```

```text
include('material/Action/DeleteOutline')
```



| Illustration | DeleteOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/DeleteOutline.png) | ![illustration for DeleteOutline](../../material/Action/DeleteOutline.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeleteOutlineXs>`
- `<$DeleteOutlineSm>`
- `<$DeleteOutlineMd>`
- `<$DeleteOutlineLg>`





## DeleteOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DeleteOutline
include('material/Action/DeleteOutline')

' renders the element
DeleteOutline('DeleteOutline', 'Delete Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DeleteOutline
include('material/Action/DeleteOutline')

' renders the element
DeleteOutline('DeleteOutline', 'Delete Outline', 'an optional tech label', 'an optional description')
@enduml
```

