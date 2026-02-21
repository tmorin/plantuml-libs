# Cairometro


```text
simpleicons/C/Cairometro
```

```text
include('simpleicons/C/Cairometro')
```



| Illustration | Cairometro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cairometro.png) | ![illustration for Cairometro](../../simpleicons/C/Cairometro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CairometroXs>`
- `<$CairometroSm>`
- `<$CairometroMd>`
- `<$CairometroLg>`





## Cairometro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cairometro
include('simpleicons/C/Cairometro')

' renders the element
Cairometro('Cairometro', 'Cairometro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cairometro
include('simpleicons/C/Cairometro')

' renders the element
Cairometro('Cairometro', 'Cairometro', 'an optional tech label', 'an optional description')
@enduml
```

