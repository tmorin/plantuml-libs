# Plus


```text
fontawesome-6/Solid/Plus
```

```text
include('fontawesome-6/Solid/Plus')
```



| Illustration | Plus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Plus.png) | ![illustration for Plus](../../fontawesome-6/Solid/Plus.Local.png) |




## Plus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Plus
include('fontawesome-6/Solid/Plus')

' renders the element
Plus('Plus', 'Plus', 'an optional tech label')
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

' loads the Item which embeds the element Plus
include('fontawesome-6/Solid/Plus')

' renders the element
Plus('Plus', 'Plus', 'an optional tech label')
@enduml
```

