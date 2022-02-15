# StarOfLife


```text
fontawesome-6/Solid/StarOfLife
```

```text
include('fontawesome-6/Solid/StarOfLife')
```



| Illustration | StarOfLife |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/StarOfLife.png) | ![illustration for StarOfLife](../../fontawesome-6/Solid/StarOfLife.Local.png) |




## StarOfLife

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StarOfLife
include('fontawesome-6/Solid/StarOfLife')

' renders the element
StarOfLife('StarOfLife', 'Star Of Life', 'an optional tech label')
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

' loads the Item which embeds the element StarOfLife
include('fontawesome-6/Solid/StarOfLife')

' renders the element
StarOfLife('StarOfLife', 'Star Of Life', 'an optional tech label')
@enduml
```

