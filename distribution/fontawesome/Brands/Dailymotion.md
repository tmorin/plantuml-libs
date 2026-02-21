# Dailymotion


```text
fontawesome/Brands/Dailymotion
```

```text
include('fontawesome/Brands/Dailymotion')
```



| Illustration | Dailymotion |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Dailymotion.png) | ![illustration for Dailymotion](../../fontawesome/Brands/Dailymotion.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DailymotionXs>`
- `<$DailymotionSm>`
- `<$DailymotionMd>`
- `<$DailymotionLg>`





## Dailymotion

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Dailymotion
include('fontawesome/Brands/Dailymotion')

' renders the element
Dailymotion('Dailymotion', 'Dailymotion', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dailymotion
include('fontawesome/Brands/Dailymotion')

' renders the element
Dailymotion('Dailymotion', 'Dailymotion', 'an optional tech label', 'an optional description')
@enduml
```

