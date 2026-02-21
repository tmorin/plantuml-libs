# Remix


```text
simpleicons/R/Remix
```

```text
include('simpleicons/R/Remix')
```



| Illustration | Remix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Remix.png) | ![illustration for Remix](../../simpleicons/R/Remix.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RemixXs>`
- `<$RemixSm>`
- `<$RemixMd>`
- `<$RemixLg>`





## Remix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Remix
include('simpleicons/R/Remix')

' renders the element
Remix('Remix', 'Remix', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Remix
include('simpleicons/R/Remix')

' renders the element
Remix('Remix', 'Remix', 'an optional tech label', 'an optional description')
@enduml
```

