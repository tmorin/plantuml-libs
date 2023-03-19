# UserNinja


```text
fontawesome-6/Solid/UserNinja
```

```text
include('fontawesome-6/Solid/UserNinja')
```



| Illustration | UserNinja |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserNinja.png) | ![illustration for UserNinja](../../fontawesome-6/Solid/UserNinja.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserNinjaXs>`
- `<$UserNinjaSm>`
- `<$UserNinjaMd>`
- `<$UserNinjaLg>`





## UserNinja

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserNinja
include('fontawesome-6/Solid/UserNinja')

' renders the element
UserNinja('UserNinja', 'User Ninja', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserNinja
include('fontawesome-6/Solid/UserNinja')

' renders the element
UserNinja('UserNinja', 'User Ninja', 'an optional tech label', 'an optional description')
@enduml
```

