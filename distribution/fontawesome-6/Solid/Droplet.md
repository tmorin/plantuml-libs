# Droplet


```text
fontawesome-6/Solid/Droplet
```

```text
include('fontawesome-6/Solid/Droplet')
```



| Illustration | Droplet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Droplet.png) | ![illustration for Droplet](../../fontawesome-6/Solid/Droplet.Local.png) |




## Droplet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Droplet
include('fontawesome-6/Solid/Droplet')

' renders the element
Droplet('Droplet', 'Droplet', 'an optional tech label')
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

' loads the Item which embeds the element Droplet
include('fontawesome-6/Solid/Droplet')

' renders the element
Droplet('Droplet', 'Droplet', 'an optional tech label')
@enduml
```

