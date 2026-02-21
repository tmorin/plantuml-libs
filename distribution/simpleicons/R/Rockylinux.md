# Rockylinux


```text
simpleicons/R/Rockylinux
```

```text
include('simpleicons/R/Rockylinux')
```



| Illustration | Rockylinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rockylinux.png) | ![illustration for Rockylinux](../../simpleicons/R/Rockylinux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RockylinuxXs>`
- `<$RockylinuxSm>`
- `<$RockylinuxMd>`
- `<$RockylinuxLg>`





## Rockylinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rockylinux
include('simpleicons/R/Rockylinux')

' renders the element
Rockylinux('Rockylinux', 'Rockylinux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rockylinux
include('simpleicons/R/Rockylinux')

' renders the element
Rockylinux('Rockylinux', 'Rockylinux', 'an optional tech label', 'an optional description')
@enduml
```

