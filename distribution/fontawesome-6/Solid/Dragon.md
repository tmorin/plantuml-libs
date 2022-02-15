# Dragon


```text
fontawesome-6/Solid/Dragon
```

```text
include('fontawesome-6/Solid/Dragon')
```



| Illustration | Dragon |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Dragon.png) | ![illustration for Dragon](../../fontawesome-6/Solid/Dragon.Local.png) |




## Dragon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Dragon
include('fontawesome-6/Solid/Dragon')

' renders the element
Dragon('Dragon', 'Dragon', 'an optional tech label')
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

' loads the Item which embeds the element Dragon
include('fontawesome-6/Solid/Dragon')

' renders the element
Dragon('Dragon', 'Dragon', 'an optional tech label')
@enduml
```

