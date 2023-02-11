# Microsoftonedrive


```text
simpleicons-8/M/Microsoftonedrive
```

```text
include('simpleicons-8/M/Microsoftonedrive')
```



| Illustration | Microsoftonedrive |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Microsoftonedrive.png) | ![illustration for Microsoftonedrive](../../simpleicons-8/M/Microsoftonedrive.Local.png) |




## Microsoftonedrive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Microsoftonedrive
include('simpleicons-8/M/Microsoftonedrive')

' renders the element
Microsoftonedrive('Microsoftonedrive', 'Microsoftonedrive', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Microsoftonedrive
include('simpleicons-8/M/Microsoftonedrive')

' renders the element
Microsoftonedrive('Microsoftonedrive', 'Microsoftonedrive', 'an optional tech label', 'an optional description')
@enduml
```

