# Users


```text
domainstorytelling/Actor/Users
```

```text
include('domainstorytelling/Actor/Users')
```



| Illustration | Users | UsersCard | UsersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../domainstorytelling/Actor/Users.png) | ![illustration for Users](../../domainstorytelling/Actor/Users.Local.png) | ![illustration for UsersCard](../../domainstorytelling/Actor/UsersCard.Local.png) | ![illustration for UsersGroup](../../domainstorytelling/Actor/UsersGroup.Local.png) |




## Users

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element Users
include('domainstorytelling/Actor/Users')

' renders the element
Users('Users', 'Users', 'an optional tech label', 'an optional description')
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
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element Users
include('domainstorytelling/Actor/Users')

' renders the element
Users('Users', 'Users', 'an optional tech label', 'an optional description')
@enduml
```

## UsersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element UsersCard
include('domainstorytelling/Actor/Users')

' renders the element
UsersCard('UsersCard', 'Users Card', 'an optional description')
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
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element UsersCard
include('domainstorytelling/Actor/Users')

' renders the element
UsersCard('UsersCard', 'Users Card', 'an optional description')
@enduml
```

## UsersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element UsersGroup
include('domainstorytelling/Actor/Users')

' renders the element
UsersGroup('UsersGroup', 'Users Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('domainstorytelling/bootstrap')

' loads the Item which embeds the element UsersGroup
include('domainstorytelling/Actor/Users')

' renders the element
UsersGroup('UsersGroup', 'Users Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

