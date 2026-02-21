# Voidlinux


```text
simpleicons/V/Voidlinux
```

```text
include('simpleicons/V/Voidlinux')
```



| Illustration | Voidlinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Voidlinux.png) | ![illustration for Voidlinux](../../simpleicons/V/Voidlinux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VoidlinuxXs>`
- `<$VoidlinuxSm>`
- `<$VoidlinuxMd>`
- `<$VoidlinuxLg>`





## Voidlinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Voidlinux
include('simpleicons/V/Voidlinux')

' renders the element
Voidlinux('Voidlinux', 'Voidlinux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Voidlinux
include('simpleicons/V/Voidlinux')

' renders the element
Voidlinux('Voidlinux', 'Voidlinux', 'an optional tech label', 'an optional description')
@enduml
```

