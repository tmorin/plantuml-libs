# Replit


```text
simpleicons/R/Replit
```

```text
include('simpleicons/R/Replit')
```



| Illustration | Replit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Replit.png) | ![illustration for Replit](../../simpleicons/R/Replit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ReplitXs>`
- `<$ReplitSm>`
- `<$ReplitMd>`
- `<$ReplitLg>`





## Replit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Replit
include('simpleicons/R/Replit')

' renders the element
Replit('Replit', 'Replit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Replit
include('simpleicons/R/Replit')

' renders the element
Replit('Replit', 'Replit', 'an optional tech label', 'an optional description')
@enduml
```

