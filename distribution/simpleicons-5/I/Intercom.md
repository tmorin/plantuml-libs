# Intercom


```text
simpleicons-5/I/Intercom
```

```text
include('simpleicons-5/I/Intercom')
```



| Illustration | Intercom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/I/Intercom.png) | ![illustration for Intercom](../../simpleicons-5/I/Intercom.Local.png) |




## Intercom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Intercom
include('simpleicons-5/I/Intercom')

' renders the element
Intercom('Intercom', 'Intercom', 'an optional tech label')
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

' loads the Item which embeds the element Intercom
include('simpleicons-5/I/Intercom')

' renders the element
Intercom('Intercom', 'Intercom', 'an optional tech label')
@enduml
```

