# Sartorius


```text
simpleicons/S/Sartorius
```

```text
include('simpleicons/S/Sartorius')
```



| Illustration | Sartorius |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Sartorius.png) | ![illustration for Sartorius](../../simpleicons/S/Sartorius.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SartoriusXs>`
- `<$SartoriusSm>`
- `<$SartoriusMd>`
- `<$SartoriusLg>`





## Sartorius

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Sartorius
include('simpleicons/S/Sartorius')

' renders the element
Sartorius('Sartorius', 'Sartorius', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sartorius
include('simpleicons/S/Sartorius')

' renders the element
Sartorius('Sartorius', 'Sartorius', 'an optional tech label', 'an optional description')
@enduml
```

