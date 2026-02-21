# TableTennisPaddleBall


```text
fontawesome/Solid/TableTennisPaddleBall
```

```text
include('fontawesome/Solid/TableTennisPaddleBall')
```



| Illustration | TableTennisPaddleBall |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TableTennisPaddleBall.png) | ![illustration for TableTennisPaddleBall](../../fontawesome/Solid/TableTennisPaddleBall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TableTennisPaddleBallXs>`
- `<$TableTennisPaddleBallSm>`
- `<$TableTennisPaddleBallMd>`
- `<$TableTennisPaddleBallLg>`





## TableTennisPaddleBall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TableTennisPaddleBall
include('fontawesome/Solid/TableTennisPaddleBall')

' renders the element
TableTennisPaddleBall('TableTennisPaddleBall', 'Table Tennis Paddle Ball', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TableTennisPaddleBall
include('fontawesome/Solid/TableTennisPaddleBall')

' renders the element
TableTennisPaddleBall('TableTennisPaddleBall', 'Table Tennis Paddle Ball', 'an optional tech label', 'an optional description')
@enduml
```

