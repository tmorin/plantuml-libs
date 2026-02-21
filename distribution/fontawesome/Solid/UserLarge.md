# UserLarge


```text
fontawesome/Solid/UserLarge
```

```text
include('fontawesome/Solid/UserLarge')
```



| Illustration | UserLarge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserLarge.png) | ![illustration for UserLarge](../../fontawesome/Solid/UserLarge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserLargeXs>`
- `<$UserLargeSm>`
- `<$UserLargeMd>`
- `<$UserLargeLg>`





## UserLarge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserLarge
include('fontawesome/Solid/UserLarge')

' renders the element
UserLarge('UserLarge', 'User Large', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserLarge
include('fontawesome/Solid/UserLarge')

' renders the element
UserLarge('UserLarge', 'User Large', 'an optional tech label', 'an optional description')
@enduml
```

