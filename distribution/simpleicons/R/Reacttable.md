# Reacttable


```text
simpleicons/R/Reacttable
```

```text
include('simpleicons/R/Reacttable')
```



| Illustration | Reacttable |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Reacttable.png) | ![illustration for Reacttable](../../simpleicons/R/Reacttable.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReacttableXs>`
- `<$ReacttableSm>`
- `<$ReacttableMd>`
- `<$ReacttableLg>`





## Reacttable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Reacttable
include('simpleicons/R/Reacttable')

' renders the element
Reacttable('Reacttable', 'Reacttable', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Reacttable
include('simpleicons/R/Reacttable')

' renders the element
Reacttable('Reacttable', 'Reacttable', 'an optional tech label', 'an optional description')
@enduml
```

