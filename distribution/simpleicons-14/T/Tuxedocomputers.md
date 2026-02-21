# Tuxedocomputers


```text
simpleicons-14/T/Tuxedocomputers
```

```text
include('simpleicons-14/T/Tuxedocomputers')
```



| Illustration | Tuxedocomputers |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tuxedocomputers.png) | ![illustration for Tuxedocomputers](../../simpleicons-14/T/Tuxedocomputers.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TuxedocomputersXs>`
- `<$TuxedocomputersSm>`
- `<$TuxedocomputersMd>`
- `<$TuxedocomputersLg>`





## Tuxedocomputers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tuxedocomputers
include('simpleicons-14/T/Tuxedocomputers')

' renders the element
Tuxedocomputers('Tuxedocomputers', 'Tuxedocomputers', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tuxedocomputers
include('simpleicons-14/T/Tuxedocomputers')

' renders the element
Tuxedocomputers('Tuxedocomputers', 'Tuxedocomputers', 'an optional tech label', 'an optional description')
@enduml
```

