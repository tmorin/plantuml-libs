# DragHandle


```text
material-4/Editor/DragHandle
```

```text
include('material-4/Editor/DragHandle')
```



| Illustration | DragHandle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Editor/DragHandle.png) | ![illustration for DragHandle](../../material-4/Editor/DragHandle.Local.png) |




## DragHandle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element DragHandle
include('material-4/Editor/DragHandle')

' renders the element
DragHandle('DragHandle', 'Drag Handle', 'an optional tech label')
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

' loads the Item which embeds the element DragHandle
include('material-4/Editor/DragHandle')

' renders the element
DragHandle('DragHandle', 'Drag Handle', 'an optional tech label')
@enduml
```

