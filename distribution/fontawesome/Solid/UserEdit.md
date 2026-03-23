# UserEdit


```text
fontawesome/Solid/UserEdit
```

```text
include('fontawesome/Solid/UserEdit')
```



| Illustration | UserEdit |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserEdit.png) | ![illustration for UserEdit](../../fontawesome/Solid/UserEdit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserEditXs>`
- `<$UserEditSm>`
- `<$UserEditMd>`
- `<$UserEditLg>`





## UserEdit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserEdit
include('fontawesome/Solid/UserEdit')

' renders the element
UserEdit('UserEdit', 'User Edit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserEdit
include('fontawesome/Solid/UserEdit')

' renders the element
UserEdit('UserEdit', 'User Edit', 'an optional tech label', 'an optional description')
@enduml
```

