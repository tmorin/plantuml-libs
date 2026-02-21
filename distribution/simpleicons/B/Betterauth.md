# Betterauth


```text
simpleicons/B/Betterauth
```

```text
include('simpleicons/B/Betterauth')
```



| Illustration | Betterauth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Betterauth.png) | ![illustration for Betterauth](../../simpleicons/B/Betterauth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BetterauthXs>`
- `<$BetterauthSm>`
- `<$BetterauthMd>`
- `<$BetterauthLg>`





## Betterauth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Betterauth
include('simpleicons/B/Betterauth')

' renders the element
Betterauth('Betterauth', 'Betterauth', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Betterauth
include('simpleicons/B/Betterauth')

' renders the element
Betterauth('Betterauth', 'Betterauth', 'an optional tech label', 'an optional description')
@enduml
```

