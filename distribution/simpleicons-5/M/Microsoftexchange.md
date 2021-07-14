# Microsoftexchange


```text
simpleicons-5/M/Microsoftexchange
```

```text
include('simpleicons-5/M/Microsoftexchange')
```



| Illustration | Microsoftexchange |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Microsoftexchange.png) | ![illustration for Microsoftexchange](../../simpleicons-5/M/Microsoftexchange.Local.png) |




## Microsoftexchange

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Microsoftexchange
include('simpleicons-5/M/Microsoftexchange')

' renders the element
Microsoftexchange('Microsoftexchange', 'Microsoftexchange', 'an optional tech label')
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

' loads the Item which embeds the element Microsoftexchange
include('simpleicons-5/M/Microsoftexchange')

' renders the element
Microsoftexchange('Microsoftexchange', 'Microsoftexchange', 'an optional tech label')
@enduml
```

