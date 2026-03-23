# ConciergeBell


```text
fontawesome/Solid/ConciergeBell
```

```text
include('fontawesome/Solid/ConciergeBell')
```



| Illustration | ConciergeBell |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ConciergeBell.png) | ![illustration for ConciergeBell](../../fontawesome/Solid/ConciergeBell.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ConciergeBellXs>`
- `<$ConciergeBellSm>`
- `<$ConciergeBellMd>`
- `<$ConciergeBellLg>`





## ConciergeBell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ConciergeBell
include('fontawesome/Solid/ConciergeBell')

' renders the element
ConciergeBell('ConciergeBell', 'Concierge Bell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ConciergeBell
include('fontawesome/Solid/ConciergeBell')

' renders the element
ConciergeBell('ConciergeBell', 'Concierge Bell', 'an optional tech label', 'an optional description')
@enduml
```

