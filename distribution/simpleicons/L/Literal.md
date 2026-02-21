# Literal


```text
simpleicons/L/Literal
```

```text
include('simpleicons/L/Literal')
```



| Illustration | Literal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Literal.png) | ![illustration for Literal](../../simpleicons/L/Literal.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LiteralXs>`
- `<$LiteralSm>`
- `<$LiteralMd>`
- `<$LiteralLg>`





## Literal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Literal
include('simpleicons/L/Literal')

' renders the element
Literal('Literal', 'Literal', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Literal
include('simpleicons/L/Literal')

' renders the element
Literal('Literal', 'Literal', 'an optional tech label', 'an optional description')
@enduml
```

