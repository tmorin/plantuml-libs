# Mxlinux


```text
simpleicons-14/M/Mxlinux
```

```text
include('simpleicons-14/M/Mxlinux')
```



| Illustration | Mxlinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mxlinux.png) | ![illustration for Mxlinux](../../simpleicons-14/M/Mxlinux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MxlinuxXs>`
- `<$MxlinuxSm>`
- `<$MxlinuxMd>`
- `<$MxlinuxLg>`





## Mxlinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mxlinux
include('simpleicons-14/M/Mxlinux')

' renders the element
Mxlinux('Mxlinux', 'Mxlinux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mxlinux
include('simpleicons-14/M/Mxlinux')

' renders the element
Mxlinux('Mxlinux', 'Mxlinux', 'an optional tech label', 'an optional description')
@enduml
```

