# Saopaulometro


```text
simpleicons-8/S/Saopaulometro
```

```text
include('simpleicons-8/S/Saopaulometro')
```



| Illustration | Saopaulometro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Saopaulometro.png) | ![illustration for Saopaulometro](../../simpleicons-8/S/Saopaulometro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SaopaulometroXs>`
- `<$SaopaulometroSm>`
- `<$SaopaulometroMd>`
- `<$SaopaulometroLg>`





## Saopaulometro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Saopaulometro
include('simpleicons-8/S/Saopaulometro')

' renders the element
Saopaulometro('Saopaulometro', 'Saopaulometro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Saopaulometro
include('simpleicons-8/S/Saopaulometro')

' renders the element
Saopaulometro('Saopaulometro', 'Saopaulometro', 'an optional tech label', 'an optional description')
@enduml
```

