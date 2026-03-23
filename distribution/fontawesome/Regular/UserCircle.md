# UserCircle


```text
fontawesome/Regular/UserCircle
```

```text
include('fontawesome/Regular/UserCircle')
```



| Illustration | UserCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/UserCircle.png) | ![illustration for UserCircle](../../fontawesome/Regular/UserCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserCircleXs>`
- `<$UserCircleSm>`
- `<$UserCircleMd>`
- `<$UserCircleLg>`





## UserCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserCircle
include('fontawesome/Regular/UserCircle')

' renders the element
UserCircle('UserCircle', 'User Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserCircle
include('fontawesome/Regular/UserCircle')

' renders the element
UserCircle('UserCircle', 'User Circle', 'an optional tech label', 'an optional description')
@enduml
```

