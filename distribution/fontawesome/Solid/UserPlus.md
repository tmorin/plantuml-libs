# UserPlus


```text
fontawesome/Solid/UserPlus
```

```text
include('fontawesome/Solid/UserPlus')
```



| Illustration | UserPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserPlus.png) | ![illustration for UserPlus](../../fontawesome/Solid/UserPlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserPlusXs>`
- `<$UserPlusSm>`
- `<$UserPlusMd>`
- `<$UserPlusLg>`





## UserPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserPlus
include('fontawesome/Solid/UserPlus')

' renders the element
UserPlus('UserPlus', 'User Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserPlus
include('fontawesome/Solid/UserPlus')

' renders the element
UserPlus('UserPlus', 'User Plus', 'an optional tech label', 'an optional description')
@enduml
```

