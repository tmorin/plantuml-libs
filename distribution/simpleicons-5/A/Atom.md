# Atom


```text
simpleicons-5/A/Atom
```

```text
include('simpleicons-5/A/Atom')
```



| Illustration | Atom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Atom.png) | ![illustration for Atom](../../simpleicons-5/A/Atom.Local.png) |




## Atom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Atom
include('simpleicons-5/A/Atom')

' renders the element
Atom('Atom', 'Atom', 'an optional tech label')
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

' loads the Item which embeds the element Atom
include('simpleicons-5/A/Atom')

' renders the element
Atom('Atom', 'Atom', 'an optional tech label')
@enduml
```

