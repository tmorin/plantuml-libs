# Blockchaindotcom


```text
simpleicons-8/B/Blockchaindotcom
```

```text
include('simpleicons-8/B/Blockchaindotcom')
```



| Illustration | Blockchaindotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Blockchaindotcom.png) | ![illustration for Blockchaindotcom](../../simpleicons-8/B/Blockchaindotcom.Local.png) |




## Blockchaindotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Blockchaindotcom
include('simpleicons-8/B/Blockchaindotcom')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Blockchaindotcom
include('simpleicons-8/B/Blockchaindotcom')

' renders the element
Blockchaindotcom('Blockchaindotcom', 'Blockchaindotcom', 'an optional tech label', 'an optional description')
@enduml
```

