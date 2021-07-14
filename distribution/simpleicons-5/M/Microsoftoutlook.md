# Microsoftoutlook


```text
simpleicons-5/M/Microsoftoutlook
```

```text
include('simpleicons-5/M/Microsoftoutlook')
```



| Illustration | Microsoftoutlook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/M/Microsoftoutlook.png) | ![illustration for Microsoftoutlook](../../simpleicons-5/M/Microsoftoutlook.Local.png) |




## Microsoftoutlook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Microsoftoutlook
include('simpleicons-5/M/Microsoftoutlook')

' renders the element
Microsoftoutlook('Microsoftoutlook', 'Microsoftoutlook', 'an optional tech label')
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

' loads the Item which embeds the element Microsoftoutlook
include('simpleicons-5/M/Microsoftoutlook')

' renders the element
Microsoftoutlook('Microsoftoutlook', 'Microsoftoutlook', 'an optional tech label')
@enduml
```

