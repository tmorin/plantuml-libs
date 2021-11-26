# Flag


```text
material-4/Content/Flag
```

```text
include('material-4/Content/Flag')
```



| Illustration | Flag |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Flag.png) | ![illustration for Flag](../../material-4/Content/Flag.Local.png) |




## Flag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Flag
include('material-4/Content/Flag')

' renders the element
Flag('Flag', 'Flag', 'an optional tech label')
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

' loads the Item which embeds the element Flag
include('material-4/Content/Flag')

' renders the element
Flag('Flag', 'Flag', 'an optional tech label')
@enduml
```

