# Tokyometro


```text
simpleicons-8/T/Tokyometro
```

```text
include('simpleicons-8/T/Tokyometro')
```



| Illustration | Tokyometro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Tokyometro.png) | ![illustration for Tokyometro](../../simpleicons-8/T/Tokyometro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TokyometroXs>`
- `<$TokyometroSm>`
- `<$TokyometroMd>`
- `<$TokyometroLg>`





## Tokyometro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tokyometro
include('simpleicons-8/T/Tokyometro')

' renders the element
Tokyometro('Tokyometro', 'Tokyometro', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Tokyometro
include('simpleicons-8/T/Tokyometro')

' renders the element
Tokyometro('Tokyometro', 'Tokyometro', 'an optional tech label', 'an optional description')
@enduml
```

