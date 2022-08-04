# LayersClear


```text
material-4/Maps/LayersClear
```

```text
include('material-4/Maps/LayersClear')
```



| Illustration | LayersClear |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/LayersClear.png) | ![illustration for LayersClear](../../material-4/Maps/LayersClear.Local.png) |




## LayersClear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LayersClear
include('material-4/Maps/LayersClear')

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
include('material-4/bootstrap')

' loads the Item which embeds the element LayersClear
include('material-4/Maps/LayersClear')

' renders the element
LayersClear('LayersClear', 'Layers Clear', 'an optional tech label', 'an optional description')
@enduml
```

