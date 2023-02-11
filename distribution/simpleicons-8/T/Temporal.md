# Temporal


```text
simpleicons-8/T/Temporal
```

```text
include('simpleicons-8/T/Temporal')
```



| Illustration | Temporal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Temporal.png) | ![illustration for Temporal](../../simpleicons-8/T/Temporal.Local.png) |




## Temporal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Temporal
include('simpleicons-8/T/Temporal')

' renders the element
Temporal('Temporal', 'Temporal', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Temporal
include('simpleicons-8/T/Temporal')

' renders the element
Temporal('Temporal', 'Temporal', 'an optional tech label', 'an optional description')
@enduml
```

