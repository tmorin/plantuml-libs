# Allocine


```text
simpleicons-8/A/Allocine
```

```text
include('simpleicons-8/A/Allocine')
```



| Illustration | Allocine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Allocine.png) | ![illustration for Allocine](../../simpleicons-8/A/Allocine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AllocineXs>`
- `<$AllocineSm>`
- `<$AllocineMd>`
- `<$AllocineLg>`





## Allocine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Allocine
include('simpleicons-8/A/Allocine')

' renders the element
Allocine('Allocine', 'Allocine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Allocine
include('simpleicons-8/A/Allocine')

' renders the element
Allocine('Allocine', 'Allocine', 'an optional tech label', 'an optional description')
@enduml
```

