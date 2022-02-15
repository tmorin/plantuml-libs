# Anydesk


```text
simpleicons-6/A/Anydesk
```

```text
include('simpleicons-6/A/Anydesk')
```



| Illustration | Anydesk |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Anydesk.png) | ![illustration for Anydesk](../../simpleicons-6/A/Anydesk.Local.png) |




## Anydesk

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Anydesk
include('simpleicons-6/A/Anydesk')

' renders the element
Anydesk('Anydesk', 'Anydesk', 'an optional tech label')
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

' loads the Item which embeds the element Anydesk
include('simpleicons-6/A/Anydesk')

' renders the element
Anydesk('Anydesk', 'Anydesk', 'an optional tech label')
@enduml
```

