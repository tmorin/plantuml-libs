# Dailymotion


```text
simpleicons-14/D/Dailymotion
```

```text
include('simpleicons-14/D/Dailymotion')
```



| Illustration | Dailymotion |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dailymotion.png) | ![illustration for Dailymotion](../../simpleicons-14/D/Dailymotion.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dailymotion
include('simpleicons-14/D/Dailymotion')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dailymotion
include('simpleicons-14/D/Dailymotion')

' renders the element
Dailymotion('Dailymotion', 'Dailymotion', 'an optional tech label', 'an optional description')
@enduml
```

