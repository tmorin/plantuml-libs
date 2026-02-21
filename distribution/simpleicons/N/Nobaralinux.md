# Nobaralinux


```text
simpleicons/N/Nobaralinux
```

```text
include('simpleicons/N/Nobaralinux')
```



| Illustration | Nobaralinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nobaralinux.png) | ![illustration for Nobaralinux](../../simpleicons/N/Nobaralinux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NobaralinuxXs>`
- `<$NobaralinuxSm>`
- `<$NobaralinuxMd>`
- `<$NobaralinuxLg>`





## Nobaralinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nobaralinux
include('simpleicons/N/Nobaralinux')

' renders the element
Nobaralinux('Nobaralinux', 'Nobaralinux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nobaralinux
include('simpleicons/N/Nobaralinux')

' renders the element
Nobaralinux('Nobaralinux', 'Nobaralinux', 'an optional tech label', 'an optional description')
@enduml
```

