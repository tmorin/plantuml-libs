# UserLarge


```text
fontawesome-6/Solid/UserLarge
```

```text
include('fontawesome-6/Solid/UserLarge')
```



| Illustration | UserLarge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserLarge.png) | ![illustration for UserLarge](../../fontawesome-6/Solid/UserLarge.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserLarge
include('fontawesome-6/Solid/UserLarge')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserLarge
include('fontawesome-6/Solid/UserLarge')

' renders the element
UserLarge('UserLarge', 'User Large', 'an optional tech label', 'an optional description')
@enduml
```

