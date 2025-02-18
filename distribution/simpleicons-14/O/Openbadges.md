# Openbadges


```text
simpleicons-14/O/Openbadges
```

```text
include('simpleicons-14/O/Openbadges')
```



| Illustration | Openbadges |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Openbadges.png) | ![illustration for Openbadges](../../simpleicons-14/O/Openbadges.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenbadgesXs>`
- `<$OpenbadgesSm>`
- `<$OpenbadgesMd>`
- `<$OpenbadgesLg>`





## Openbadges

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Openbadges
include('simpleicons-14/O/Openbadges')

' renders the element
Openbadges('Openbadges', 'Openbadges', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openbadges
include('simpleicons-14/O/Openbadges')

' renders the element
Openbadges('Openbadges', 'Openbadges', 'an optional tech label', 'an optional description')
@enduml
```

