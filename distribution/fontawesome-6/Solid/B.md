# B


```text
fontawesome-6/Solid/B
```

```text
include('fontawesome-6/Solid/B')
```



| Illustration | B |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/B.png) | ![illustration for B](../../fontawesome-6/Solid/B.Local.png) |




## B

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element B
include('fontawesome-6/Solid/B')

' renders the element
B('B', 'B', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element B
include('fontawesome-6/Solid/B')

' renders the element
B('B', 'B', 'an optional tech label', 'an optional description')
@enduml
```

