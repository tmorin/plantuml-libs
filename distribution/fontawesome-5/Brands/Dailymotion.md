# Dailymotion


```text
fontawesome-5/Brands/Dailymotion
```

```text
include('fontawesome-5/Brands/Dailymotion')
```



| Illustration | Dailymotion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Dailymotion.png) | ![illustration for Dailymotion](../../fontawesome-5/Brands/Dailymotion.Local.png) |




## Dailymotion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Dailymotion
include('fontawesome-5/Brands/Dailymotion')

' renders the element
Dailymotion('Dailymotion', 'Dailymotion', 'an optional tech label')
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

' loads the Item which embeds the element Dailymotion
include('fontawesome-5/Brands/Dailymotion')

' renders the element
Dailymotion('Dailymotion', 'Dailymotion', 'an optional tech label')
@enduml
```

