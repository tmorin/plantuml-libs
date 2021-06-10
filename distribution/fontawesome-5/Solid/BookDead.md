# BookDead


```text
fontawesome-5/Solid/BookDead
```

```text
include('fontawesome-5/Solid/BookDead')
```



| Illustration | BookDead |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BookDead.png) | ![illustration for BookDead](../../fontawesome-5/Solid/BookDead.Local.png) |




## BookDead

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BookDead
include('fontawesome-5/Solid/BookDead')

' renders the element
BookDead('BookDead', 'Book Dead', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BookDead
include('fontawesome-5/Solid/BookDead')

' renders the element
BookDead('BookDead', 'Book Dead', 'an optional tech label')
@enduml
```

