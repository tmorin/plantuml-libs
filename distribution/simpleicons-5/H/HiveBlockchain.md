# HiveBlockchain


```text
simpleicons-5/H/HiveBlockchain
```

```text
include('simpleicons-5/H/HiveBlockchain')
```



| Illustration | HiveBlockchain |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/HiveBlockchain.png) | ![illustration for HiveBlockchain](../../simpleicons-5/H/HiveBlockchain.Local.png) |




## HiveBlockchain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element HiveBlockchain
include('simpleicons-5/H/HiveBlockchain')

' renders the element
HiveBlockchain('HiveBlockchain', 'Hive Blockchain', 'an optional tech label')
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

' loads the Item which embeds the element HiveBlockchain
include('simpleicons-5/H/HiveBlockchain')

' renders the element
HiveBlockchain('HiveBlockchain', 'Hive Blockchain', 'an optional tech label')
@enduml
```

