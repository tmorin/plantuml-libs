# Statuspal


```text
simpleicons-8/S/Statuspal
```

```text
include('simpleicons-8/S/Statuspal')
```



| Illustration | Statuspal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Statuspal.png) | ![illustration for Statuspal](../../simpleicons-8/S/Statuspal.Local.png) |




## Statuspal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Statuspal
include('simpleicons-8/S/Statuspal')

' renders the element
Statuspal('Statuspal', 'Statuspal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Statuspal
include('simpleicons-8/S/Statuspal')

' renders the element
Statuspal('Statuspal', 'Statuspal', 'an optional tech label', 'an optional description')
@enduml
```

