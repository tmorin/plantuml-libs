# VerifiedUser


```text
material/Action/VerifiedUser
```

```text
include('material/Action/VerifiedUser')
```



| Illustration | VerifiedUser |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/VerifiedUser.png) | ![illustration for VerifiedUser](../../material/Action/VerifiedUser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VerifiedUserXs>`
- `<$VerifiedUserSm>`
- `<$VerifiedUserMd>`
- `<$VerifiedUserLg>`





## VerifiedUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element VerifiedUser
include('material/Action/VerifiedUser')

' renders the element
VerifiedUser('VerifiedUser', 'Verified User', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element VerifiedUser
include('material/Action/VerifiedUser')

' renders the element
VerifiedUser('VerifiedUser', 'Verified User', 'an optional tech label', 'an optional description')
@enduml
```

