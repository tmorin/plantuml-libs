# Babel


```text
simpleicons-8/B/Babel
```

```text
include('simpleicons-8/B/Babel')
```



| Illustration | Babel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Babel.png) | ![illustration for Babel](../../simpleicons-8/B/Babel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BabelXs>`
- `<$BabelSm>`
- `<$BabelMd>`
- `<$BabelLg>`





## Babel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Babel
include('simpleicons-8/B/Babel')

' renders the element
Babel('Babel', 'Babel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Babel
include('simpleicons-8/B/Babel')

' renders the element
Babel('Babel', 'Babel', 'an optional tech label', 'an optional description')
@enduml
```

