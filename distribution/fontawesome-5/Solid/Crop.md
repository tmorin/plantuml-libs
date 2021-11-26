# Crop


```text
fontawesome-5/Solid/Crop
```

```text
include('fontawesome-5/Solid/Crop')
```



| Illustration | Crop |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Crop.png) | ![illustration for Crop](../../fontawesome-5/Solid/Crop.Local.png) |




## Crop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Crop
include('fontawesome-5/Solid/Crop')

' renders the element
Crop('Crop', 'Crop', 'an optional tech label')
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

' loads the Item which embeds the element Crop
include('fontawesome-5/Solid/Crop')

' renders the element
Crop('Crop', 'Crop', 'an optional tech label')
@enduml
```

