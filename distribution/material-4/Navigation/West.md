# West


```text
material-4/Navigation/West
```

```text
include('material-4/Navigation/West')
```



| Illustration | West |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/West.png) | ![illustration for West](../../material-4/Navigation/West.Local.png) |




## West

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element West
include('material-4/Navigation/West')

' renders the element
West('West', 'West', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element West
include('material-4/Navigation/West')

' renders the element
West('West', 'West', 'an optional tech label', 'an optional description')
@enduml
```

