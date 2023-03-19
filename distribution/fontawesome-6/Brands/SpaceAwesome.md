# SpaceAwesome


```text
fontawesome-6/Brands/SpaceAwesome
```

```text
include('fontawesome-6/Brands/SpaceAwesome')
```



| Illustration | SpaceAwesome |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SpaceAwesome.png) | ![illustration for SpaceAwesome](../../fontawesome-6/Brands/SpaceAwesome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpaceAwesomeXs>`
- `<$SpaceAwesomeSm>`
- `<$SpaceAwesomeMd>`
- `<$SpaceAwesomeLg>`





## SpaceAwesome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SpaceAwesome
include('fontawesome-6/Brands/SpaceAwesome')

' renders the element
SpaceAwesome('SpaceAwesome', 'Space Awesome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SpaceAwesome
include('fontawesome-6/Brands/SpaceAwesome')

' renders the element
SpaceAwesome('SpaceAwesome', 'Space Awesome', 'an optional tech label', 'an optional description')
@enduml
```

