# Supermicro


```text
simpleicons/S/Supermicro
```

```text
include('simpleicons/S/Supermicro')
```



| Illustration | Supermicro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Supermicro.png) | ![illustration for Supermicro](../../simpleicons/S/Supermicro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SupermicroXs>`
- `<$SupermicroSm>`
- `<$SupermicroMd>`
- `<$SupermicroLg>`





## Supermicro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Supermicro
include('simpleicons/S/Supermicro')

' renders the element
Supermicro('Supermicro', 'Supermicro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Supermicro
include('simpleicons/S/Supermicro')

' renders the element
Supermicro('Supermicro', 'Supermicro', 'an optional tech label', 'an optional description')
@enduml
```

