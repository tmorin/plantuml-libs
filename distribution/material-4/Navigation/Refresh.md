# Refresh


```text
material-4/Navigation/Refresh
```

```text
include('material-4/Navigation/Refresh')
```



| Illustration | Refresh |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/Refresh.png) | ![illustration for Refresh](../../material-4/Navigation/Refresh.Local.png) |




## Refresh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Refresh
include('material-4/Navigation/Refresh')

' renders the element
Refresh('Refresh', 'Refresh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Refresh
include('material-4/Navigation/Refresh')

' renders the element
Refresh('Refresh', 'Refresh', 'an optional tech label', 'an optional description')
@enduml
```

