# HouseCircleXmark


```text
fontawesome-6/Solid/HouseCircleXmark
```

```text
include('fontawesome-6/Solid/HouseCircleXmark')
```



| Illustration | HouseCircleXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HouseCircleXmark.png) | ![illustration for HouseCircleXmark](../../fontawesome-6/Solid/HouseCircleXmark.Local.png) |




## HouseCircleXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HouseCircleXmark
include('fontawesome-6/Solid/HouseCircleXmark')

' renders the element
HouseCircleXmark('HouseCircleXmark', 'House Circle Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseCircleXmark
include('fontawesome-6/Solid/HouseCircleXmark')

' renders the element
HouseCircleXmark('HouseCircleXmark', 'House Circle Xmark', 'an optional tech label', 'an optional description')
@enduml
```

