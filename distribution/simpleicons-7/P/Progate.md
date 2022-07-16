# Progate


```text
simpleicons-7/P/Progate
```

```text
include('simpleicons-7/P/Progate')
```



| Illustration | Progate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/P/Progate.png) | ![illustration for Progate](../../simpleicons-7/P/Progate.Local.png) |




## Progate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Progate
include('simpleicons-7/P/Progate')

' renders the element
Progate('Progate', 'Progate', 'an optional tech label')
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

' loads the Item which embeds the element Progate
include('simpleicons-7/P/Progate')

' renders the element
Progate('Progate', 'Progate', 'an optional tech label')
@enduml
```

