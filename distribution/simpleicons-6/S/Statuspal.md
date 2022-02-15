# Statuspal


```text
simpleicons-6/S/Statuspal
```

```text
include('simpleicons-6/S/Statuspal')
```



| Illustration | Statuspal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Statuspal.png) | ![illustration for Statuspal](../../simpleicons-6/S/Statuspal.Local.png) |




## Statuspal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Statuspal
include('simpleicons-6/S/Statuspal')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Statuspal
include('simpleicons-6/S/Statuspal')

' renders the element
Statuspal('Statuspal', 'Statuspal', 'an optional tech label')
@enduml
```

