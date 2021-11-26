# Plus


```text
fontawesome-5/Solid/Plus
```

```text
include('fontawesome-5/Solid/Plus')
```



| Illustration | Plus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Plus.png) | ![illustration for Plus](../../fontawesome-5/Solid/Plus.Local.png) |




## Plus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Plus
include('fontawesome-5/Solid/Plus')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Plus
include('fontawesome-5/Solid/Plus')

' renders the element
Plus('Plus', 'Plus', 'an optional tech label')
@enduml
```

