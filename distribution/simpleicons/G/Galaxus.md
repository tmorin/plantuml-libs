# Galaxus


```text
simpleicons/G/Galaxus
```

```text
include('simpleicons/G/Galaxus')
```



| Illustration | Galaxus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Galaxus.png) | ![illustration for Galaxus](../../simpleicons/G/Galaxus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GalaxusXs>`
- `<$GalaxusSm>`
- `<$GalaxusMd>`
- `<$GalaxusLg>`





## Galaxus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Galaxus
include('simpleicons/G/Galaxus')

' renders the element
Galaxus('Galaxus', 'Galaxus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Galaxus
include('simpleicons/G/Galaxus')

' renders the element
Galaxus('Galaxus', 'Galaxus', 'an optional tech label', 'an optional description')
@enduml
```

