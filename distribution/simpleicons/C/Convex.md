# Convex


```text
simpleicons/C/Convex
```

```text
include('simpleicons/C/Convex')
```



| Illustration | Convex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Convex.png) | ![illustration for Convex](../../simpleicons/C/Convex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConvexXs>`
- `<$ConvexSm>`
- `<$ConvexMd>`
- `<$ConvexLg>`





## Convex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Convex
include('simpleicons/C/Convex')

' renders the element
Convex('Convex', 'Convex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Convex
include('simpleicons/C/Convex')

' renders the element
Convex('Convex', 'Convex', 'an optional tech label', 'an optional description')
@enduml
```

