# Kando


```text
simpleicons-14/K/Kando
```

```text
include('simpleicons-14/K/Kando')
```



| Illustration | Kando |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/K/Kando.png) | ![illustration for Kando](../../simpleicons-14/K/Kando.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KandoXs>`
- `<$KandoSm>`
- `<$KandoMd>`
- `<$KandoLg>`





## Kando

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Kando
include('simpleicons-14/K/Kando')

' renders the element
Kando('Kando', 'Kando', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Kando
include('simpleicons-14/K/Kando')

' renders the element
Kando('Kando', 'Kando', 'an optional tech label', 'an optional description')
@enduml
```

