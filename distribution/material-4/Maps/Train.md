# Train


```text
material-4/Maps/Train
```

```text
include('material-4/Maps/Train')
```



| Illustration | Train |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/Train.png) | ![illustration for Train](../../material-4/Maps/Train.Local.png) |




## Train

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Train
include('material-4/Maps/Train')

' renders the element
Train('Train', 'Train', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Train
include('material-4/Maps/Train')

' renders the element
Train('Train', 'Train', 'an optional tech label')
@enduml
```

