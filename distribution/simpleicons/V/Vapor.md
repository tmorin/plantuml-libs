# Vapor


```text
simpleicons/V/Vapor
```

```text
include('simpleicons/V/Vapor')
```



| Illustration | Vapor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vapor.png) | ![illustration for Vapor](../../simpleicons/V/Vapor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VaporXs>`
- `<$VaporSm>`
- `<$VaporMd>`
- `<$VaporLg>`





## Vapor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vapor
include('simpleicons/V/Vapor')

' renders the element
Vapor('Vapor', 'Vapor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vapor
include('simpleicons/V/Vapor')

' renders the element
Vapor('Vapor', 'Vapor', 'an optional tech label', 'an optional description')
@enduml
```

