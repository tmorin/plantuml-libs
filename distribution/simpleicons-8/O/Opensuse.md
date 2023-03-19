# Opensuse


```text
simpleicons-8/O/Opensuse
```

```text
include('simpleicons-8/O/Opensuse')
```



| Illustration | Opensuse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Opensuse.png) | ![illustration for Opensuse](../../simpleicons-8/O/Opensuse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpensuseXs>`
- `<$OpensuseSm>`
- `<$OpensuseMd>`
- `<$OpensuseLg>`





## Opensuse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Opensuse
include('simpleicons-8/O/Opensuse')

' renders the element
Opensuse('Opensuse', 'Opensuse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opensuse
include('simpleicons-8/O/Opensuse')

' renders the element
Opensuse('Opensuse', 'Opensuse', 'an optional tech label', 'an optional description')
@enduml
```

