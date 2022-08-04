# StarBorder


```text
material-4/Toggle/StarBorder
```

```text
include('material-4/Toggle/StarBorder')
```



| Illustration | StarBorder |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Toggle/StarBorder.png) | ![illustration for StarBorder](../../material-4/Toggle/StarBorder.Local.png) |




## StarBorder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element StarBorder
include('material-4/Toggle/StarBorder')

' renders the element
StarBorder('StarBorder', 'Star Border', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StarBorder
include('material-4/Toggle/StarBorder')

' renders the element
StarBorder('StarBorder', 'Star Border', 'an optional tech label', 'an optional description')
@enduml
```

