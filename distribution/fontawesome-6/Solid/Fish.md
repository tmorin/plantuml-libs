# Fish


```text
fontawesome-6/Solid/Fish
```

```text
include('fontawesome-6/Solid/Fish')
```



| Illustration | Fish |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Fish.png) | ![illustration for Fish](../../fontawesome-6/Solid/Fish.Local.png) |




## Fish

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Fish
include('fontawesome-6/Solid/Fish')

' renders the element
Fish('Fish', 'Fish', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fish
include('fontawesome-6/Solid/Fish')

' renders the element
Fish('Fish', 'Fish', 'an optional tech label', 'an optional description')
@enduml
```

