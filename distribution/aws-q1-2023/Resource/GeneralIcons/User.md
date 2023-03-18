# User


```text
aws-q1-2023/Resource/GeneralIcons/User
```

```text
include('aws-q1-2023/Resource/GeneralIcons/User')
```



| Illustration | User | UserCard | UserGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/GeneralIcons/User.png) | ![illustration for User](../../../aws-q1-2023/Resource/GeneralIcons/User.Local.png) | ![illustration for UserCard](../../../aws-q1-2023/Resource/GeneralIcons/UserCard.Local.png) | ![illustration for UserGroup](../../../aws-q1-2023/Resource/GeneralIcons/UserGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserXs>`
- `<$UserSm>`
- `<$UserMd>`
- `<$UserLg>`





## User

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element User
include('aws-q1-2023/Resource/GeneralIcons/User')

' renders the element
User('User', 'User', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element User
include('aws-q1-2023/Resource/GeneralIcons/User')

' renders the element
User('User', 'User', 'an optional tech label', 'an optional description')
@enduml
```

## UserCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element UserCard
include('aws-q1-2023/Resource/GeneralIcons/User')

' renders the element
UserCard('UserCard', 'User Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element UserCard
include('aws-q1-2023/Resource/GeneralIcons/User')

' renders the element
UserCard('UserCard', 'User Card', 'an optional description')
@enduml
```

## UserGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element UserGroup
include('aws-q1-2023/Resource/GeneralIcons/User')

' renders the element
UserGroup('UserGroup', 'User Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element UserGroup
include('aws-q1-2023/Resource/GeneralIcons/User')

' renders the element
UserGroup('UserGroup', 'User Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

