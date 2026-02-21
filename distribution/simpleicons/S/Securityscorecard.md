# Securityscorecard


```text
simpleicons/S/Securityscorecard
```

```text
include('simpleicons/S/Securityscorecard')
```



| Illustration | Securityscorecard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Securityscorecard.png) | ![illustration for Securityscorecard](../../simpleicons/S/Securityscorecard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SecurityscorecardXs>`
- `<$SecurityscorecardSm>`
- `<$SecurityscorecardMd>`
- `<$SecurityscorecardLg>`





## Securityscorecard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Securityscorecard
include('simpleicons/S/Securityscorecard')

' renders the element
Securityscorecard('Securityscorecard', 'Securityscorecard', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Securityscorecard
include('simpleicons/S/Securityscorecard')

' renders the element
Securityscorecard('Securityscorecard', 'Securityscorecard', 'an optional tech label', 'an optional description')
@enduml
```

