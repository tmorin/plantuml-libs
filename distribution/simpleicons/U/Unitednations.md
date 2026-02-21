# Unitednations


```text
simpleicons/U/Unitednations
```

```text
include('simpleicons/U/Unitednations')
```



| Illustration | Unitednations |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Unitednations.png) | ![illustration for Unitednations](../../simpleicons/U/Unitednations.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UnitednationsXs>`
- `<$UnitednationsSm>`
- `<$UnitednationsMd>`
- `<$UnitednationsLg>`





## Unitednations

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Unitednations
include('simpleicons/U/Unitednations')

' renders the element
Unitednations('Unitednations', 'Unitednations', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unitednations
include('simpleicons/U/Unitednations')

' renders the element
Unitednations('Unitednations', 'Unitednations', 'an optional tech label', 'an optional description')
@enduml
```

