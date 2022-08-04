# Reduxsaga


```text
simpleicons-7/R/Reduxsaga
```

```text
include('simpleicons-7/R/Reduxsaga')
```



| Illustration | Reduxsaga |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/R/Reduxsaga.png) | ![illustration for Reduxsaga](../../simpleicons-7/R/Reduxsaga.Local.png) |




## Reduxsaga

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Reduxsaga
include('simpleicons-7/R/Reduxsaga')

' renders the element
Reduxsaga('Reduxsaga', 'Reduxsaga', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Reduxsaga
include('simpleicons-7/R/Reduxsaga')

' renders the element
Reduxsaga('Reduxsaga', 'Reduxsaga', 'an optional tech label', 'an optional description')
@enduml
```

