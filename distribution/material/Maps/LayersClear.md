# LayersClear


```text
material/Maps/LayersClear
```

```text
include('material/Maps/LayersClear')
```



| Illustration | LayersClear |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LayersClear.png) | ![illustration for LayersClear](../../material/Maps/LayersClear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LayersClearXs>`
- `<$LayersClearSm>`
- `<$LayersClearMd>`
- `<$LayersClearLg>`





## LayersClear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LayersClear
include('material/Maps/LayersClear')

' renders the element
LayersClear('LayersClear', 'Layers Clear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LayersClear
include('material/Maps/LayersClear')

' renders the element
LayersClear('LayersClear', 'Layers Clear', 'an optional tech label', 'an optional description')
@enduml
```

