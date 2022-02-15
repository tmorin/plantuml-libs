# Atom


```text
fontawesome-6/Solid/Atom
```

```text
include('fontawesome-6/Solid/Atom')
```



| Illustration | Atom |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Atom.png) | ![illustration for Atom](../../fontawesome-6/Solid/Atom.Local.png) |




## Atom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Atom
include('fontawesome-6/Solid/Atom')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Atom
include('fontawesome-6/Solid/Atom')

' renders the element
Atom('Atom', 'Atom', 'an optional tech label')
@enduml
```

