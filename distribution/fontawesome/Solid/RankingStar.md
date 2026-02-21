# RankingStar


```text
fontawesome/Solid/RankingStar
```

```text
include('fontawesome/Solid/RankingStar')
```



| Illustration | RankingStar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RankingStar.png) | ![illustration for RankingStar](../../fontawesome/Solid/RankingStar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RankingStarXs>`
- `<$RankingStarSm>`
- `<$RankingStarMd>`
- `<$RankingStarLg>`





## RankingStar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RankingStar
include('fontawesome/Solid/RankingStar')

' renders the element
RankingStar('RankingStar', 'Ranking Star', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element RankingStar
include('fontawesome/Solid/RankingStar')

' renders the element
RankingStar('RankingStar', 'Ranking Star', 'an optional tech label', 'an optional description')
@enduml
```

