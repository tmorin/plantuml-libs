# Almalinux


```text
simpleicons/A/Almalinux
```

```text
include('simpleicons/A/Almalinux')
```



| Illustration | Almalinux |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Almalinux.png) | ![illustration for Almalinux](../../simpleicons/A/Almalinux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlmalinuxXs>`
- `<$AlmalinuxSm>`
- `<$AlmalinuxMd>`
- `<$AlmalinuxLg>`





## Almalinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Almalinux
include('simpleicons/A/Almalinux')

' renders the element
Almalinux('Almalinux', 'Almalinux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Almalinux
include('simpleicons/A/Almalinux')

' renders the element
Almalinux('Almalinux', 'Almalinux', 'an optional tech label', 'an optional description')
@enduml
```

