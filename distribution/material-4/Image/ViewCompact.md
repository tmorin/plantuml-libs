# ViewCompact


```text
material-4/Image/ViewCompact
```

```text
include('material-4/Image/ViewCompact')
```



| Illustration | ViewCompact |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/ViewCompact.png) | ![illustration for ViewCompact](../../material-4/Image/ViewCompact.Local.png) |




## ViewCompact

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ViewCompact
include('material-4/Image/ViewCompact')

' renders the element
ViewCompact('ViewCompact', 'View Compact', 'an optional tech label')
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

' loads the Item which embeds the element ViewCompact
include('material-4/Image/ViewCompact')

' renders the element
ViewCompact('ViewCompact', 'View Compact', 'an optional tech label')
@enduml
```

