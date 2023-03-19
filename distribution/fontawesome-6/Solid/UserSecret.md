# UserSecret


```text
fontawesome-6/Solid/UserSecret
```

```text
include('fontawesome-6/Solid/UserSecret')
```



| Illustration | UserSecret |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserSecret.png) | ![illustration for UserSecret](../../fontawesome-6/Solid/UserSecret.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserSecretXs>`
- `<$UserSecretSm>`
- `<$UserSecretMd>`
- `<$UserSecretLg>`





## UserSecret

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserSecret
include('fontawesome-6/Solid/UserSecret')

' renders the element
UserSecret('UserSecret', 'User Secret', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserSecret
include('fontawesome-6/Solid/UserSecret')

' renders the element
UserSecret('UserSecret', 'User Secret', 'an optional tech label', 'an optional description')
@enduml
```

