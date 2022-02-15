# Reason


```text
simpleicons-6/R/Reason
```

```text
include('simpleicons-6/R/Reason')
```



| Illustration | Reason |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/R/Reason.png) | ![illustration for Reason](../../simpleicons-6/R/Reason.Local.png) |




## Reason

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Reason
include('simpleicons-6/R/Reason')

' renders the element
Reason('Reason', 'Reason', 'an optional tech label')
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

' loads the Item which embeds the element Reason
include('simpleicons-6/R/Reason')

' renders the element
Reason('Reason', 'Reason', 'an optional tech label')
@enduml
```

