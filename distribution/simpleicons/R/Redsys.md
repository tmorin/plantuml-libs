# Redsys


```text
simpleicons/R/Redsys
```

```text
include('simpleicons/R/Redsys')
```



| Illustration | Redsys |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Redsys.png) | ![illustration for Redsys](../../simpleicons/R/Redsys.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RedsysXs>`
- `<$RedsysSm>`
- `<$RedsysMd>`
- `<$RedsysLg>`





## Redsys

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Redsys
include('simpleicons/R/Redsys')

' renders the element
Redsys('Redsys', 'Redsys', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Redsys
include('simpleicons/R/Redsys')

' renders the element
Redsys('Redsys', 'Redsys', 'an optional tech label', 'an optional description')
@enduml
```

