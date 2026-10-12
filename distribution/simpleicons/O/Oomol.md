# Oomol


```text
simpleicons/O/Oomol
```

```text
include('simpleicons/O/Oomol')
```



| Illustration | Oomol |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Oomol.png) | ![illustration for Oomol](../../simpleicons/O/Oomol.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OomolXs>`
- `<$OomolSm>`
- `<$OomolMd>`
- `<$OomolLg>`





## Oomol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Oomol
include('simpleicons/O/Oomol')

' renders the element
Oomol('Oomol', 'Oomol', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Oomol
include('simpleicons/O/Oomol')

' renders the element
Oomol('Oomol', 'Oomol', 'an optional tech label', 'an optional description')
@enduml
```

