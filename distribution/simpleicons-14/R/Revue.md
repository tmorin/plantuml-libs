# Revue


```text
simpleicons-14/R/Revue
```

```text
include('simpleicons-14/R/Revue')
```



| Illustration | Revue |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Revue.png) | ![illustration for Revue](../../simpleicons-14/R/Revue.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RevueXs>`
- `<$RevueSm>`
- `<$RevueMd>`
- `<$RevueLg>`





## Revue

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Revue
include('simpleicons-14/R/Revue')

' renders the element
Revue('Revue', 'Revue', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Revue
include('simpleicons-14/R/Revue')

' renders the element
Revue('Revue', 'Revue', 'an optional tech label', 'an optional description')
@enduml
```

