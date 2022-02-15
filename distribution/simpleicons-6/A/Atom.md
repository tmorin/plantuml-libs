# Atom


```text
simpleicons-6/A/Atom
```

```text
include('simpleicons-6/A/Atom')
```



| Illustration | Atom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Atom.png) | ![illustration for Atom](../../simpleicons-6/A/Atom.Local.png) |




## Atom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Atom
include('simpleicons-6/A/Atom')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Atom
include('simpleicons-6/A/Atom')

' renders the element
Atom('Atom', 'Atom', 'an optional tech label')
@enduml
```

