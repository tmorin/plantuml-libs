# Microsoftoutlook


```text
simpleicons-8/M/Microsoftoutlook
```

```text
include('simpleicons-8/M/Microsoftoutlook')
```



| Illustration | Microsoftoutlook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Microsoftoutlook.png) | ![illustration for Microsoftoutlook](../../simpleicons-8/M/Microsoftoutlook.Local.png) |




## Microsoftoutlook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Microsoftoutlook
include('simpleicons-8/M/Microsoftoutlook')

' renders the element
Microsoftoutlook('Microsoftoutlook', 'Microsoftoutlook', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microsoftoutlook
include('simpleicons-8/M/Microsoftoutlook')

' renders the element
Microsoftoutlook('Microsoftoutlook', 'Microsoftoutlook', 'an optional tech label', 'an optional description')
@enduml
```

