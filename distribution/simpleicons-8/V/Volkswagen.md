# Volkswagen


```text
simpleicons-8/V/Volkswagen
```

```text
include('simpleicons-8/V/Volkswagen')
```



| Illustration | Volkswagen |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/V/Volkswagen.png) | ![illustration for Volkswagen](../../simpleicons-8/V/Volkswagen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VolkswagenXs>`
- `<$VolkswagenSm>`
- `<$VolkswagenMd>`
- `<$VolkswagenLg>`





## Volkswagen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Volkswagen
include('simpleicons-8/V/Volkswagen')

' renders the element
Volkswagen('Volkswagen', 'Volkswagen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Volkswagen
include('simpleicons-8/V/Volkswagen')

' renders the element
Volkswagen('Volkswagen', 'Volkswagen', 'an optional tech label', 'an optional description')
@enduml
```

