# UserTag


```text
fontawesome/Solid/UserTag
```

```text
include('fontawesome/Solid/UserTag')
```



| Illustration | UserTag |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserTag.png) | ![illustration for UserTag](../../fontawesome/Solid/UserTag.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserTagXs>`
- `<$UserTagSm>`
- `<$UserTagMd>`
- `<$UserTagLg>`





## UserTag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserTag
include('fontawesome/Solid/UserTag')

' renders the element
UserTag('UserTag', 'User Tag', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserTag
include('fontawesome/Solid/UserTag')

' renders the element
UserTag('UserTag', 'User Tag', 'an optional tech label', 'an optional description')
@enduml
```

