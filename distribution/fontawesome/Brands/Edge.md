# Edge


```text
fontawesome/Brands/Edge
```

```text
include('fontawesome/Brands/Edge')
```



| Illustration | Edge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Edge.png) | ![illustration for Edge](../../fontawesome/Brands/Edge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EdgeXs>`
- `<$EdgeSm>`
- `<$EdgeMd>`
- `<$EdgeLg>`





## Edge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Edge
include('fontawesome/Brands/Edge')

' renders the element
Edge('Edge', 'Edge', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Edge
include('fontawesome/Brands/Edge')

' renders the element
Edge('Edge', 'Edge', 'an optional tech label', 'an optional description')
@enduml
```

