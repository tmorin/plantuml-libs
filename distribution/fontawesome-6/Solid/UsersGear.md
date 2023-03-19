# UsersGear


```text
fontawesome-6/Solid/UsersGear
```

```text
include('fontawesome-6/Solid/UsersGear')
```



| Illustration | UsersGear |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UsersGear.png) | ![illustration for UsersGear](../../fontawesome-6/Solid/UsersGear.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UsersGearXs>`
- `<$UsersGearSm>`
- `<$UsersGearMd>`
- `<$UsersGearLg>`





## UsersGear

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UsersGear
include('fontawesome-6/Solid/UsersGear')

' renders the element
UsersGear('UsersGear', 'Users Gear', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UsersGear
include('fontawesome-6/Solid/UsersGear')

' renders the element
UsersGear('UsersGear', 'Users Gear', 'an optional tech label', 'an optional description')
@enduml
```

