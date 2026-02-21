# Ipfs


```text
simpleicons/I/Ipfs
```

```text
include('simpleicons/I/Ipfs')
```



| Illustration | Ipfs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Ipfs.png) | ![illustration for Ipfs](../../simpleicons/I/Ipfs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IpfsXs>`
- `<$IpfsSm>`
- `<$IpfsMd>`
- `<$IpfsLg>`





## Ipfs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ipfs
include('simpleicons/I/Ipfs')

' renders the element
Ipfs('Ipfs', 'Ipfs', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ipfs
include('simpleicons/I/Ipfs')

' renders the element
Ipfs('Ipfs', 'Ipfs', 'an optional tech label', 'an optional description')
@enduml
```

