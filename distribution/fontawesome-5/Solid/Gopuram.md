# Gopuram


```text
fontawesome-5/Solid/Gopuram
```

```text
include('fontawesome-5/Solid/Gopuram')
```



| Illustration | Gopuram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Gopuram.png) | ![illustration for Gopuram](../../fontawesome-5/Solid/Gopuram.Local.png) |




## Gopuram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gopuram
include('fontawesome-5/Solid/Gopuram')

' renders the element
Gopuram('Gopuram', 'Gopuram', 'an optional tech label')
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

' loads the Item which embeds the element Gopuram
include('fontawesome-5/Solid/Gopuram')

' renders the element
Gopuram('Gopuram', 'Gopuram', 'an optional tech label')
@enduml
```

