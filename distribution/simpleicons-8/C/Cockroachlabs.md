# Cockroachlabs


```text
simpleicons-8/C/Cockroachlabs
```

```text
include('simpleicons-8/C/Cockroachlabs')
```



| Illustration | Cockroachlabs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Cockroachlabs.png) | ![illustration for Cockroachlabs](../../simpleicons-8/C/Cockroachlabs.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cockroachlabs
include('simpleicons-8/C/Cockroachlabs')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Cockroachlabs
include('simpleicons-8/C/Cockroachlabs')

' renders the element
Cockroachlabs('Cockroachlabs', 'Cockroachlabs', 'an optional tech label', 'an optional description')
@enduml
```

