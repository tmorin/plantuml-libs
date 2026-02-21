# Train


```text
fontawesome/Solid/Train
```

```text
include('fontawesome/Solid/Train')
```



| Illustration | Train |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Train.png) | ![illustration for Train](../../fontawesome/Solid/Train.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrainXs>`
- `<$TrainSm>`
- `<$TrainMd>`
- `<$TrainLg>`





## Train

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Train
include('fontawesome/Solid/Train')

' renders the element
Train('Train', 'Train', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Train
include('fontawesome/Solid/Train')

' renders the element
Train('Train', 'Train', 'an optional tech label', 'an optional description')
@enduml
```

