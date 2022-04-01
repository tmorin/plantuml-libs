# BoxesPacking


```text
fontawesome-6/Solid/BoxesPacking
```

```text
include('fontawesome-6/Solid/BoxesPacking')
```



| Illustration | BoxesPacking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BoxesPacking.png) | ![illustration for BoxesPacking](../../fontawesome-6/Solid/BoxesPacking.Local.png) |




## BoxesPacking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BoxesPacking
include('fontawesome-6/Solid/BoxesPacking')

' renders the element
BoxesPacking('BoxesPacking', 'Boxes Packing', 'an optional tech label')
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

' loads the Item which embeds the element BoxesPacking
include('fontawesome-6/Solid/BoxesPacking')

' renders the element
BoxesPacking('BoxesPacking', 'Boxes Packing', 'an optional tech label')
@enduml
```

