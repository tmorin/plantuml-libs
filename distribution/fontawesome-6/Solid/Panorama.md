# Panorama


```text
fontawesome-6/Solid/Panorama
```

```text
include('fontawesome-6/Solid/Panorama')
```



| Illustration | Panorama |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Panorama.png) | ![illustration for Panorama](../../fontawesome-6/Solid/Panorama.Local.png) |




## Panorama

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Panorama
include('fontawesome-6/Solid/Panorama')

' renders the element
Panorama('Panorama', 'Panorama', 'an optional tech label')
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

' loads the Item which embeds the element Panorama
include('fontawesome-6/Solid/Panorama')

' renders the element
Panorama('Panorama', 'Panorama', 'an optional tech label')
@enduml
```

