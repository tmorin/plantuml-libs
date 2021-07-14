# Redo


```text
material-4/Content/Redo
```

```text
include('material-4/Content/Redo')
```



| Illustration | Redo |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Redo.png) | ![illustration for Redo](../../material-4/Content/Redo.Local.png) |




## Redo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Redo
include('material-4/Content/Redo')

' renders the element
Redo('Redo', 'Redo', 'an optional tech label')
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

' loads the Item which embeds the element Redo
include('material-4/Content/Redo')

' renders the element
Redo('Redo', 'Redo', 'an optional tech label')
@enduml
```

