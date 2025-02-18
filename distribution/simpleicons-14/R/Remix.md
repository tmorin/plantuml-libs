# Remix


```text
simpleicons-14/R/Remix
```

```text
include('simpleicons-14/R/Remix')
```



| Illustration | Remix |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Remix.png) | ![illustration for Remix](../../simpleicons-14/R/Remix.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Remix
include('simpleicons-14/R/Remix')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Remix
include('simpleicons-14/R/Remix')

' renders the element
Remix('Remix', 'Remix', 'an optional tech label', 'an optional description')
@enduml
```

