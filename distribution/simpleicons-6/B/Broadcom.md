# Broadcom


```text
simpleicons-6/B/Broadcom
```

```text
include('simpleicons-6/B/Broadcom')
```



| Illustration | Broadcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Broadcom.png) | ![illustration for Broadcom](../../simpleicons-6/B/Broadcom.Local.png) |




## Broadcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Broadcom
include('simpleicons-6/B/Broadcom')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Broadcom
include('simpleicons-6/B/Broadcom')

' renders the element
Broadcom('Broadcom', 'Broadcom', 'an optional tech label')
@enduml
```

