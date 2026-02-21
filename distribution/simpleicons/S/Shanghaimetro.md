# Shanghaimetro


```text
simpleicons/S/Shanghaimetro
```

```text
include('simpleicons/S/Shanghaimetro')
```



| Illustration | Shanghaimetro |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Shanghaimetro.png) | ![illustration for Shanghaimetro](../../simpleicons/S/Shanghaimetro.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShanghaimetroXs>`
- `<$ShanghaimetroSm>`
- `<$ShanghaimetroMd>`
- `<$ShanghaimetroLg>`





## Shanghaimetro

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Shanghaimetro
include('simpleicons/S/Shanghaimetro')

' renders the element
Shanghaimetro('Shanghaimetro', 'Shanghaimetro', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Shanghaimetro
include('simpleicons/S/Shanghaimetro')

' renders the element
Shanghaimetro('Shanghaimetro', 'Shanghaimetro', 'an optional tech label', 'an optional description')
@enduml
```

