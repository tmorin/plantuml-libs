# Atom


```text
simpleicons-14/A/Atom
```

```text
include('simpleicons-14/A/Atom')
```



| Illustration | Atom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Atom.png) | ![illustration for Atom](../../simpleicons-14/A/Atom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AtomXs>`
- `<$AtomSm>`
- `<$AtomMd>`
- `<$AtomLg>`





## Atom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Atom
include('simpleicons-14/A/Atom')

' renders the element
Atom('Atom', 'Atom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Atom
include('simpleicons-14/A/Atom')

' renders the element
Atom('Atom', 'Atom', 'an optional tech label', 'an optional description')
@enduml
```

