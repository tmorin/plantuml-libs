# Reorder


```text
material-4/Action/Reorder
```

```text
include('material-4/Action/Reorder')
```



| Illustration | Reorder |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Reorder.png) | ![illustration for Reorder](../../material-4/Action/Reorder.Local.png) |




## Reorder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Reorder
include('material-4/Action/Reorder')

' renders the element
Reorder('Reorder', 'Reorder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reorder
include('material-4/Action/Reorder')

' renders the element
Reorder('Reorder', 'Reorder', 'an optional tech label', 'an optional description')
@enduml
```

