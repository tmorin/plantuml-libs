# Adjust


```text
fontawesome-5/Solid/Adjust
```

```text
include('fontawesome-5/Solid/Adjust')
```



| Illustration | Adjust |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Adjust.png) | ![illustration for Adjust](../../fontawesome-5/Solid/Adjust.Local.png) |




## Adjust

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Adjust
include('fontawesome-5/Solid/Adjust')

' renders the element
Adjust('Adjust', 'Adjust', 'an optional tech label')
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

' loads the Item which embeds the element Adjust
include('fontawesome-5/Solid/Adjust')

' renders the element
Adjust('Adjust', 'Adjust', 'an optional tech label')
@enduml
```

