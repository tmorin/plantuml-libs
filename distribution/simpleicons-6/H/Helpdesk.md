# Helpdesk


```text
simpleicons-6/H/Helpdesk
```

```text
include('simpleicons-6/H/Helpdesk')
```



| Illustration | Helpdesk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Helpdesk.png) | ![illustration for Helpdesk](../../simpleicons-6/H/Helpdesk.Local.png) |




## Helpdesk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Helpdesk
include('simpleicons-6/H/Helpdesk')

' renders the element
Helpdesk('Helpdesk', 'Helpdesk', 'an optional tech label')
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

' loads the Item which embeds the element Helpdesk
include('simpleicons-6/H/Helpdesk')

' renders the element
Helpdesk('Helpdesk', 'Helpdesk', 'an optional tech label')
@enduml
```

