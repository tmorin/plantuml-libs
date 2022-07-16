# Ipfs


```text
simpleicons-7/I/Ipfs
```

```text
include('simpleicons-7/I/Ipfs')
```



| Illustration | Ipfs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/I/Ipfs.png) | ![illustration for Ipfs](../../simpleicons-7/I/Ipfs.Local.png) |




## Ipfs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Ipfs
include('simpleicons-7/I/Ipfs')

' renders the element
Ipfs('Ipfs', 'Ipfs', 'an optional tech label')
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

' loads the Item which embeds the element Ipfs
include('simpleicons-7/I/Ipfs')

' renders the element
Ipfs('Ipfs', 'Ipfs', 'an optional tech label')
@enduml
```

