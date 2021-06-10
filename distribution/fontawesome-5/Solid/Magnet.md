# Magnet


```text
fontawesome-5/Solid/Magnet
```

```text
include('fontawesome-5/Solid/Magnet')
```



| Illustration | Magnet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Magnet.png) | ![illustration for Magnet](../../fontawesome-5/Solid/Magnet.Local.png) |




## Magnet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Magnet
include('fontawesome-5/Solid/Magnet')

' renders the element
Magnet('Magnet', 'Magnet', 'an optional tech label')
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

' loads the Item which embeds the element Magnet
include('fontawesome-5/Solid/Magnet')

' renders the element
Magnet('Magnet', 'Magnet', 'an optional tech label')
@enduml
```

