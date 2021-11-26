# Icons


```text
fontawesome-5/Solid/Icons
```

```text
include('fontawesome-5/Solid/Icons')
```



| Illustration | Icons |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Icons.png) | ![illustration for Icons](../../fontawesome-5/Solid/Icons.Local.png) |




## Icons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Icons
include('fontawesome-5/Solid/Icons')

' renders the element
Icons('Icons', 'Icons', 'an optional tech label')
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

' loads the Item which embeds the element Icons
include('fontawesome-5/Solid/Icons')

' renders the element
Icons('Icons', 'Icons', 'an optional tech label')
@enduml
```

