# HiveBlockchain


```text
simpleicons-6/H/HiveBlockchain
```

```text
include('simpleicons-6/H/HiveBlockchain')
```



| Illustration | HiveBlockchain |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/HiveBlockchain.png) | ![illustration for HiveBlockchain](../../simpleicons-6/H/HiveBlockchain.Local.png) |




## HiveBlockchain

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element HiveBlockchain
include('simpleicons-6/H/HiveBlockchain')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element HiveBlockchain
include('simpleicons-6/H/HiveBlockchain')

' renders the element
HiveBlockchain('HiveBlockchain', 'Hive Blockchain', 'an optional tech label')
@enduml
```

