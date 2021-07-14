# Reason


```text
simpleicons-5/R/Reason
```

```text
include('simpleicons-5/R/Reason')
```



| Illustration | Reason |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/R/Reason.png) | ![illustration for Reason](../../simpleicons-5/R/Reason.Local.png) |




## Reason

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Reason
include('simpleicons-5/R/Reason')

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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Reason
include('simpleicons-5/R/Reason')

' renders the element
Reason('Reason', 'Reason', 'an optional tech label')
@enduml
```

