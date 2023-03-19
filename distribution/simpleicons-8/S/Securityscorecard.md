# Securityscorecard


```text
simpleicons-8/S/Securityscorecard
```

```text
include('simpleicons-8/S/Securityscorecard')
```



| Illustration | Securityscorecard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Securityscorecard.png) | ![illustration for Securityscorecard](../../simpleicons-8/S/Securityscorecard.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Securityscorecard
include('simpleicons-8/S/Securityscorecard')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Securityscorecard
include('simpleicons-8/S/Securityscorecard')

' renders the element
Securityscorecard('Securityscorecard', 'Securityscorecard', 'an optional tech label', 'an optional description')
@enduml
```

