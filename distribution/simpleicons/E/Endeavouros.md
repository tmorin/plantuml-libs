# Endeavouros


```text
simpleicons/E/Endeavouros
```

```text
include('simpleicons/E/Endeavouros')
```



| Illustration | Endeavouros |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/E/Endeavouros.png) | ![illustration for Endeavouros](../../simpleicons/E/Endeavouros.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EndeavourosXs>`
- `<$EndeavourosSm>`
- `<$EndeavourosMd>`
- `<$EndeavourosLg>`





## Endeavouros

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Endeavouros
include('simpleicons/E/Endeavouros')

' renders the element
Endeavouros('Endeavouros', 'Endeavouros', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Endeavouros
include('simpleicons/E/Endeavouros')

' renders the element
Endeavouros('Endeavouros', 'Endeavouros', 'an optional tech label', 'an optional description')
@enduml
```

