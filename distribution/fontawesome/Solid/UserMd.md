# UserMd


```text
fontawesome/Solid/UserMd
```

```text
include('fontawesome/Solid/UserMd')
```



| Illustration | UserMd |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserMd.png) | ![illustration for UserMd](../../fontawesome/Solid/UserMd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserMdXs>`
- `<$UserMdSm>`
- `<$UserMdMd>`
- `<$UserMdLg>`





## UserMd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserMd
include('fontawesome/Solid/UserMd')

' renders the element
UserMd('UserMd', 'User Md', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserMd
include('fontawesome/Solid/UserMd')

' renders the element
UserMd('UserMd', 'User Md', 'an optional tech label', 'an optional description')
@enduml
```

