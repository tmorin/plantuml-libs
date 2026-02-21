# Literal


```text
simpleicons-14/L/Literal
```

```text
include('simpleicons-14/L/Literal')
```



| Illustration | Literal |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Literal.png) | ![illustration for Literal](../../simpleicons-14/L/Literal.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Literal
include('simpleicons-14/L/Literal')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Literal
include('simpleicons-14/L/Literal')

' renders the element
Literal('Literal', 'Literal', 'an optional tech label', 'an optional description')
@enduml
```

