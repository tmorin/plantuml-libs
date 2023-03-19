# UserTie


```text
fontawesome-6/Solid/UserTie
```

```text
include('fontawesome-6/Solid/UserTie')
```



| Illustration | UserTie |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserTie.png) | ![illustration for UserTie](../../fontawesome-6/Solid/UserTie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserTieXs>`
- `<$UserTieSm>`
- `<$UserTieMd>`
- `<$UserTieLg>`





## UserTie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserTie
include('fontawesome-6/Solid/UserTie')

' renders the element
UserTie('UserTie', 'User Tie', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserTie
include('fontawesome-6/Solid/UserTie')

' renders the element
UserTie('UserTie', 'User Tie', 'an optional tech label', 'an optional description')
@enduml
```

