# Ethereum


```text
simpleicons-7/E/Ethereum
```

```text
include('simpleicons-7/E/Ethereum')
```



| Illustration | Ethereum |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/E/Ethereum.png) | ![illustration for Ethereum](../../simpleicons-7/E/Ethereum.Local.png) |




## Ethereum

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ethereum
include('simpleicons-7/E/Ethereum')

' renders the element
Ethereum('Ethereum', 'Ethereum', 'an optional tech label')
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

' loads the Item which embeds the element Ethereum
include('simpleicons-7/E/Ethereum')

' renders the element
Ethereum('Ethereum', 'Ethereum', 'an optional tech label')
@enduml
```

