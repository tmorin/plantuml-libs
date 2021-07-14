# Hyperledger


```text
simpleicons-5/H/Hyperledger
```

```text
include('simpleicons-5/H/Hyperledger')
```



| Illustration | Hyperledger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hyperledger.png) | ![illustration for Hyperledger](../../simpleicons-5/H/Hyperledger.Local.png) |




## Hyperledger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hyperledger
include('simpleicons-5/H/Hyperledger')

' renders the element
Hyperledger('Hyperledger', 'Hyperledger', 'an optional tech label')
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

' loads the Item which embeds the element Hyperledger
include('simpleicons-5/H/Hyperledger')

' renders the element
Hyperledger('Hyperledger', 'Hyperledger', 'an optional tech label')
@enduml
```

