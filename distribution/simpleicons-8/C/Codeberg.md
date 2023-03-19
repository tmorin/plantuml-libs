# Codeberg


```text
simpleicons-8/C/Codeberg
```

```text
include('simpleicons-8/C/Codeberg')
```



| Illustration | Codeberg |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Codeberg.png) | ![illustration for Codeberg](../../simpleicons-8/C/Codeberg.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodebergXs>`
- `<$CodebergSm>`
- `<$CodebergMd>`
- `<$CodebergLg>`





## Codeberg

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Codeberg
include('simpleicons-8/C/Codeberg')

' renders the element
Codeberg('Codeberg', 'Codeberg', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codeberg
include('simpleicons-8/C/Codeberg')

' renders the element
Codeberg('Codeberg', 'Codeberg', 'an optional tech label', 'an optional description')
@enduml
```

