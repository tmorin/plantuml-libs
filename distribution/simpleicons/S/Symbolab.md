# Symbolab


```text
simpleicons/S/Symbolab
```

```text
include('simpleicons/S/Symbolab')
```



| Illustration | Symbolab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Symbolab.png) | ![illustration for Symbolab](../../simpleicons/S/Symbolab.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SymbolabXs>`
- `<$SymbolabSm>`
- `<$SymbolabMd>`
- `<$SymbolabLg>`





## Symbolab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Symbolab
include('simpleicons/S/Symbolab')

' renders the element
Symbolab('Symbolab', 'Symbolab', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Symbolab
include('simpleicons/S/Symbolab')

' renders the element
Symbolab('Symbolab', 'Symbolab', 'an optional tech label', 'an optional description')
@enduml
```

