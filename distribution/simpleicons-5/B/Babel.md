# Babel


```text
simpleicons-5/B/Babel
```

```text
include('simpleicons-5/B/Babel')
```



| Illustration | Babel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Babel.png) | ![illustration for Babel](../../simpleicons-5/B/Babel.Local.png) |




## Babel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Babel
include('simpleicons-5/B/Babel')

' renders the element
Babel('Babel', 'Babel', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Babel
include('simpleicons-5/B/Babel')

' renders the element
Babel('Babel', 'Babel', 'an optional tech label')
@enduml
```

