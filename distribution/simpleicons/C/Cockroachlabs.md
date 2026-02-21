# Cockroachlabs


```text
simpleicons/C/Cockroachlabs
```

```text
include('simpleicons/C/Cockroachlabs')
```



| Illustration | Cockroachlabs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Cockroachlabs.png) | ![illustration for Cockroachlabs](../../simpleicons/C/Cockroachlabs.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CockroachlabsXs>`
- `<$CockroachlabsSm>`
- `<$CockroachlabsMd>`
- `<$CockroachlabsLg>`





## Cockroachlabs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Cockroachlabs
include('simpleicons/C/Cockroachlabs')

' renders the element
Cockroachlabs('Cockroachlabs', 'Cockroachlabs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Cockroachlabs
include('simpleicons/C/Cockroachlabs')

' renders the element
Cockroachlabs('Cockroachlabs', 'Cockroachlabs', 'an optional tech label', 'an optional description')
@enduml
```

