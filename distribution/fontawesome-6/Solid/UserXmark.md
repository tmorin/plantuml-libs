# UserXmark


```text
fontawesome-6/Solid/UserXmark
```

```text
include('fontawesome-6/Solid/UserXmark')
```



| Illustration | UserXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserXmark.png) | ![illustration for UserXmark](../../fontawesome-6/Solid/UserXmark.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserXmarkXs>`
- `<$UserXmarkSm>`
- `<$UserXmarkMd>`
- `<$UserXmarkLg>`





## UserXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserXmark
include('fontawesome-6/Solid/UserXmark')

' renders the element
UserXmark('UserXmark', 'User Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserXmark
include('fontawesome-6/Solid/UserXmark')

' renders the element
UserXmark('UserXmark', 'User Xmark', 'an optional tech label', 'an optional description')
@enduml
```

