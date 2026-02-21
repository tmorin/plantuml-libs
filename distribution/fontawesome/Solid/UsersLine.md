# UsersLine


```text
fontawesome/Solid/UsersLine
```

```text
include('fontawesome/Solid/UsersLine')
```



| Illustration | UsersLine |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UsersLine.png) | ![illustration for UsersLine](../../fontawesome/Solid/UsersLine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UsersLineXs>`
- `<$UsersLineSm>`
- `<$UsersLineMd>`
- `<$UsersLineLg>`





## UsersLine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UsersLine
include('fontawesome/Solid/UsersLine')

' renders the element
UsersLine('UsersLine', 'Users Line', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UsersLine
include('fontawesome/Solid/UsersLine')

' renders the element
UsersLine('UsersLine', 'Users Line', 'an optional tech label', 'an optional description')
@enduml
```

