# Archlinux


```text
simpleicons-14/A/Archlinux
```

```text
include('simpleicons-14/A/Archlinux')
```



| Illustration | Archlinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Archlinux.png) | ![illustration for Archlinux](../../simpleicons-14/A/Archlinux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArchlinuxXs>`
- `<$ArchlinuxSm>`
- `<$ArchlinuxMd>`
- `<$ArchlinuxLg>`





## Archlinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Archlinux
include('simpleicons-14/A/Archlinux')

' renders the element
Archlinux('Archlinux', 'Archlinux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Archlinux
include('simpleicons-14/A/Archlinux')

' renders the element
Archlinux('Archlinux', 'Archlinux', 'an optional tech label', 'an optional description')
@enduml
```

