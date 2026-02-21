# Nobaralinux


```text
simpleicons-14/N/Nobaralinux
```

```text
include('simpleicons-14/N/Nobaralinux')
```



| Illustration | Nobaralinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nobaralinux.png) | ![illustration for Nobaralinux](../../simpleicons-14/N/Nobaralinux.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nobaralinux
include('simpleicons-14/N/Nobaralinux')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nobaralinux
include('simpleicons-14/N/Nobaralinux')

' renders the element
Nobaralinux('Nobaralinux', 'Nobaralinux', 'an optional tech label', 'an optional description')
@enduml
```

