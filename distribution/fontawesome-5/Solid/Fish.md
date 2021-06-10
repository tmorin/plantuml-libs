# Fish


```text
fontawesome-5/Solid/Fish
```

```text
include('fontawesome-5/Solid/Fish')
```



| Illustration | Fish |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Fish.png) | ![illustration for Fish](../../fontawesome-5/Solid/Fish.Local.png) |




## Fish

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Fish
include('fontawesome-5/Solid/Fish')

' renders the element
Fish('Fish', 'Fish', 'an optional tech label')
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

' loads the Item which embeds the element Fish
include('fontawesome-5/Solid/Fish')

' renders the element
Fish('Fish', 'Fish', 'an optional tech label')
@enduml
```

