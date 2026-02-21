# TrainSubway


```text
fontawesome/Solid/TrainSubway
```

```text
include('fontawesome/Solid/TrainSubway')
```



| Illustration | TrainSubway |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TrainSubway.png) | ![illustration for TrainSubway](../../fontawesome/Solid/TrainSubway.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrainSubwayXs>`
- `<$TrainSubwaySm>`
- `<$TrainSubwayMd>`
- `<$TrainSubwayLg>`





## TrainSubway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TrainSubway
include('fontawesome/Solid/TrainSubway')

' renders the element
TrainSubway('TrainSubway', 'Train Subway', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TrainSubway
include('fontawesome/Solid/TrainSubway')

' renders the element
TrainSubway('TrainSubway', 'Train Subway', 'an optional tech label', 'an optional description')
@enduml
```

