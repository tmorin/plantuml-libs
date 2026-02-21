# Printables


```text
simpleicons/P/Printables
```

```text
include('simpleicons/P/Printables')
```



| Illustration | Printables |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Printables.png) | ![illustration for Printables](../../simpleicons/P/Printables.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PrintablesXs>`
- `<$PrintablesSm>`
- `<$PrintablesMd>`
- `<$PrintablesLg>`





## Printables

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Printables
include('simpleicons/P/Printables')

' renders the element
Printables('Printables', 'Printables', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Printables
include('simpleicons/P/Printables')

' renders the element
Printables('Printables', 'Printables', 'an optional tech label', 'an optional description')
@enduml
```

