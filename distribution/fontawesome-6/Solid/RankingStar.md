# RankingStar


```text
fontawesome-6/Solid/RankingStar
```

```text
include('fontawesome-6/Solid/RankingStar')
```



| Illustration | RankingStar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RankingStar.png) | ![illustration for RankingStar](../../fontawesome-6/Solid/RankingStar.Local.png) |




## RankingStar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RankingStar
include('fontawesome-6/Solid/RankingStar')

' renders the element
RankingStar('RankingStar', 'Ranking Star', 'an optional tech label')
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

' loads the Item which embeds the element RankingStar
include('fontawesome-6/Solid/RankingStar')

' renders the element
RankingStar('RankingStar', 'Ranking Star', 'an optional tech label')
@enduml
```

