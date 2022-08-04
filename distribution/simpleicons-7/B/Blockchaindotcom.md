# Blockchaindotcom


```text
simpleicons-7/B/Blockchaindotcom
```

```text
include('simpleicons-7/B/Blockchaindotcom')
```



| Illustration | Blockchaindotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Blockchaindotcom.png) | ![illustration for Blockchaindotcom](../../simpleicons-7/B/Blockchaindotcom.Local.png) |




## Blockchaindotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Blockchaindotcom
include('simpleicons-7/B/Blockchaindotcom')

' renders the element
Blockchaindotcom('Blockchaindotcom', 'Blockchaindotcom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Blockchaindotcom
include('simpleicons-7/B/Blockchaindotcom')

' renders the element
Blockchaindotcom('Blockchaindotcom', 'Blockchaindotcom', 'an optional tech label', 'an optional description')
@enduml
```

