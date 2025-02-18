# Kalilinux


```text
simpleicons-14/K/Kalilinux
```

```text
include('simpleicons-14/K/Kalilinux')
```



| Illustration | Kalilinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kalilinux.png) | ![illustration for Kalilinux](../../simpleicons-14/K/Kalilinux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KalilinuxXs>`
- `<$KalilinuxSm>`
- `<$KalilinuxMd>`
- `<$KalilinuxLg>`





## Kalilinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kalilinux
include('simpleicons-14/K/Kalilinux')

' renders the element
Kalilinux('Kalilinux', 'Kalilinux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kalilinux
include('simpleicons-14/K/Kalilinux')

' renders the element
Kalilinux('Kalilinux', 'Kalilinux', 'an optional tech label', 'an optional description')
@enduml
```

