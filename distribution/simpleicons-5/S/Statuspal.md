# Statuspal


```text
simpleicons-5/S/Statuspal
```

```text
include('simpleicons-5/S/Statuspal')
```



| Illustration | Statuspal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Statuspal.png) | ![illustration for Statuspal](../../simpleicons-5/S/Statuspal.Local.png) |




## Statuspal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Statuspal
include('simpleicons-5/S/Statuspal')

' renders the element
Statuspal('Statuspal', 'Statuspal', 'an optional tech label')
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

' loads the Item which embeds the element Statuspal
include('simpleicons-5/S/Statuspal')

' renders the element
Statuspal('Statuspal', 'Statuspal', 'an optional tech label')
@enduml
```

