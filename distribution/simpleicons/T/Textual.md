# Textual


```text
simpleicons/T/Textual
```

```text
include('simpleicons/T/Textual')
```



| Illustration | Textual |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Textual.png) | ![illustration for Textual](../../simpleicons/T/Textual.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TextualXs>`
- `<$TextualSm>`
- `<$TextualMd>`
- `<$TextualLg>`





## Textual

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Textual
include('simpleicons/T/Textual')

' renders the element
Textual('Textual', 'Textual', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Textual
include('simpleicons/T/Textual')

' renders the element
Textual('Textual', 'Textual', 'an optional tech label', 'an optional description')
@enduml
```

