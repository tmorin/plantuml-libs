# BottleWater


```text
fontawesome-6/Solid/BottleWater
```

```text
include('fontawesome-6/Solid/BottleWater')
```



| Illustration | BottleWater |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BottleWater.png) | ![illustration for BottleWater](../../fontawesome-6/Solid/BottleWater.Local.png) |




## BottleWater

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BottleWater
include('fontawesome-6/Solid/BottleWater')

' renders the element
BottleWater('BottleWater', 'Bottle Water', 'an optional tech label')
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

' loads the Item which embeds the element BottleWater
include('fontawesome-6/Solid/BottleWater')

' renders the element
BottleWater('BottleWater', 'Bottle Water', 'an optional tech label')
@enduml
```

