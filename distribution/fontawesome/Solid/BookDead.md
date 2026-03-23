# BookDead


```text
fontawesome/Solid/BookDead
```

```text
include('fontawesome/Solid/BookDead')
```



| Illustration | BookDead |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BookDead.png) | ![illustration for BookDead](../../fontawesome/Solid/BookDead.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookDeadXs>`
- `<$BookDeadSm>`
- `<$BookDeadMd>`
- `<$BookDeadLg>`





## BookDead

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BookDead
include('fontawesome/Solid/BookDead')

' renders the element
BookDead('BookDead', 'Book Dead', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BookDead
include('fontawesome/Solid/BookDead')

' renders the element
BookDead('BookDead', 'Book Dead', 'an optional tech label', 'an optional description')
@enduml
```

