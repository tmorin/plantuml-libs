# Broadcom


```text
simpleicons-5/B/Broadcom
```

```text
include('simpleicons-5/B/Broadcom')
```



| Illustration | Broadcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Broadcom.png) | ![illustration for Broadcom](../../simpleicons-5/B/Broadcom.Local.png) |




## Broadcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Broadcom
include('simpleicons-5/B/Broadcom')

' renders the element
Broadcom('Broadcom', 'Broadcom', 'an optional tech label')
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

' loads the Item which embeds the element Broadcom
include('simpleicons-5/B/Broadcom')

' renders the element
Broadcom('Broadcom', 'Broadcom', 'an optional tech label')
@enduml
```

