# AutoDelete


```text
material-4/Alert/AutoDelete
```

```text
include('material-4/Alert/AutoDelete')
```



| Illustration | AutoDelete |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Alert/AutoDelete.png) | ![illustration for AutoDelete](../../material-4/Alert/AutoDelete.Local.png) |




## AutoDelete

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AutoDelete
include('material-4/Alert/AutoDelete')

' renders the element
AutoDelete('AutoDelete', 'Auto Delete', 'an optional tech label')
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

' loads the Item which embeds the element AutoDelete
include('material-4/Alert/AutoDelete')

' renders the element
AutoDelete('AutoDelete', 'Auto Delete', 'an optional tech label')
@enduml
```

