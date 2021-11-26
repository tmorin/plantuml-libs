# MarsStrokeV


```text
fontawesome-5/Solid/MarsStrokeV
```

```text
include('fontawesome-5/Solid/MarsStrokeV')
```



| Illustration | MarsStrokeV |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MarsStrokeV.png) | ![illustration for MarsStrokeV](../../fontawesome-5/Solid/MarsStrokeV.Local.png) |




## MarsStrokeV

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MarsStrokeV
include('fontawesome-5/Solid/MarsStrokeV')

' renders the element
MarsStrokeV('MarsStrokeV', 'Mars Stroke V', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MarsStrokeV
include('fontawesome-5/Solid/MarsStrokeV')

' renders the element
MarsStrokeV('MarsStrokeV', 'Mars Stroke V', 'an optional tech label')
@enduml
```

