# Supercell


```text
simpleicons-14/S/Supercell
```

```text
include('simpleicons-14/S/Supercell')
```



| Illustration | Supercell |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Supercell.png) | ![illustration for Supercell](../../simpleicons-14/S/Supercell.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SupercellXs>`
- `<$SupercellSm>`
- `<$SupercellMd>`
- `<$SupercellLg>`





## Supercell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Supercell
include('simpleicons-14/S/Supercell')

' renders the element
Supercell('Supercell', 'Supercell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Supercell
include('simpleicons-14/S/Supercell')

' renders the element
Supercell('Supercell', 'Supercell', 'an optional tech label', 'an optional description')
@enduml
```

