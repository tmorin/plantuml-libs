# CircleDot


```text
fontawesome-6/Solid/CircleDot
```

```text
include('fontawesome-6/Solid/CircleDot')
```



| Illustration | CircleDot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CircleDot.png) | ![illustration for CircleDot](../../fontawesome-6/Solid/CircleDot.Local.png) |




## CircleDot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CircleDot
include('fontawesome-6/Solid/CircleDot')

' renders the element
CircleDot('CircleDot', 'Circle Dot', 'an optional tech label')
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

' loads the Item which embeds the element CircleDot
include('fontawesome-6/Solid/CircleDot')

' renders the element
CircleDot('CircleDot', 'Circle Dot', 'an optional tech label')
@enduml
```

