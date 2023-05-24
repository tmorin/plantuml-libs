# Symbolab


```text
simpleicons-8/S/Symbolab
```

```text
include('simpleicons-8/S/Symbolab')
```



| Illustration | Symbolab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Symbolab.png) | ![illustration for Symbolab](../../simpleicons-8/S/Symbolab.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Symbolab
include('simpleicons-8/S/Symbolab')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Symbolab
include('simpleicons-8/S/Symbolab')

' renders the element
Symbolab('Symbolab', 'Symbolab', 'an optional tech label', 'an optional description')
@enduml
```

