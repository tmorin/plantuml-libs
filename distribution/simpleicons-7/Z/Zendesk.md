# Zendesk


```text
simpleicons-7/Z/Zendesk
```

```text
include('simpleicons-7/Z/Zendesk')
```



| Illustration | Zendesk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/Z/Zendesk.png) | ![illustration for Zendesk](../../simpleicons-7/Z/Zendesk.Local.png) |




## Zendesk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Zendesk
include('simpleicons-7/Z/Zendesk')

' renders the element
Zendesk('Zendesk', 'Zendesk', 'an optional tech label')
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

' loads the Item which embeds the element Zendesk
include('simpleicons-7/Z/Zendesk')

' renders the element
Zendesk('Zendesk', 'Zendesk', 'an optional tech label')
@enduml
```

