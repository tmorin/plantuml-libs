# Reduxsaga


```text
simpleicons-5/R/Reduxsaga
```

```text
include('simpleicons-5/R/Reduxsaga')
```



| Illustration | Reduxsaga |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Reduxsaga.png) | ![illustration for Reduxsaga](../../simpleicons-5/R/Reduxsaga.Local.png) |




## Reduxsaga

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Reduxsaga
include('simpleicons-5/R/Reduxsaga')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Reduxsaga
include('simpleicons-5/R/Reduxsaga')

' renders the element
Reduxsaga('Reduxsaga', 'Reduxsaga', 'an optional tech label')
@enduml
```

