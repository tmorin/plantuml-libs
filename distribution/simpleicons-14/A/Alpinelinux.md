# Alpinelinux


```text
simpleicons-14/A/Alpinelinux
```

```text
include('simpleicons-14/A/Alpinelinux')
```



| Illustration | Alpinelinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Alpinelinux.png) | ![illustration for Alpinelinux](../../simpleicons-14/A/Alpinelinux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlpinelinuxXs>`
- `<$AlpinelinuxSm>`
- `<$AlpinelinuxMd>`
- `<$AlpinelinuxLg>`





## Alpinelinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alpinelinux
include('simpleicons-14/A/Alpinelinux')

' renders the element
Alpinelinux('Alpinelinux', 'Alpinelinux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alpinelinux
include('simpleicons-14/A/Alpinelinux')

' renders the element
Alpinelinux('Alpinelinux', 'Alpinelinux', 'an optional tech label', 'an optional description')
@enduml
```

