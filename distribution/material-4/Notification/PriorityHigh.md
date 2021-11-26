# PriorityHigh


```text
material-4/Notification/PriorityHigh
```

```text
include('material-4/Notification/PriorityHigh')
```



| Illustration | PriorityHigh |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/PriorityHigh.png) | ![illustration for PriorityHigh](../../material-4/Notification/PriorityHigh.Local.png) |




## PriorityHigh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PriorityHigh
include('material-4/Notification/PriorityHigh')

' renders the element
PriorityHigh('PriorityHigh', 'Priority High', 'an optional tech label')
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

' loads the Item which embeds the element PriorityHigh
include('material-4/Notification/PriorityHigh')

' renders the element
PriorityHigh('PriorityHigh', 'Priority High', 'an optional tech label')
@enduml
```

