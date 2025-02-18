# Opennebula


```text
simpleicons-14/O/Opennebula
```

```text
include('simpleicons-14/O/Opennebula')
```



| Illustration | Opennebula |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Opennebula.png) | ![illustration for Opennebula](../../simpleicons-14/O/Opennebula.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpennebulaXs>`
- `<$OpennebulaSm>`
- `<$OpennebulaMd>`
- `<$OpennebulaLg>`





## Opennebula

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Opennebula
include('simpleicons-14/O/Opennebula')

' renders the element
Opennebula('Opennebula', 'Opennebula', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Opennebula
include('simpleicons-14/O/Opennebula')

' renders the element
Opennebula('Opennebula', 'Opennebula', 'an optional tech label', 'an optional description')
@enduml
```

