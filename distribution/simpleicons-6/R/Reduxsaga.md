# Reduxsaga


```text
simpleicons-6/R/Reduxsaga
```

```text
include('simpleicons-6/R/Reduxsaga')
```



| Illustration | Reduxsaga |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Reduxsaga.png) | ![illustration for Reduxsaga](../../simpleicons-6/R/Reduxsaga.Local.png) |




## Reduxsaga

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Reduxsaga
include('simpleicons-6/R/Reduxsaga')

' renders the element
Reduxsaga('Reduxsaga', 'Reduxsaga', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Reduxsaga
include('simpleicons-6/R/Reduxsaga')

' renders the element
Reduxsaga('Reduxsaga', 'Reduxsaga', 'an optional tech label')
@enduml
```

