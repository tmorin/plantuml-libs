# Gopuram


```text
fontawesome-6/Solid/Gopuram
```

```text
include('fontawesome-6/Solid/Gopuram')
```



| Illustration | Gopuram |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Gopuram.png) | ![illustration for Gopuram](../../fontawesome-6/Solid/Gopuram.Local.png) |




## Gopuram

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gopuram
include('fontawesome-6/Solid/Gopuram')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gopuram
include('fontawesome-6/Solid/Gopuram')

' renders the element
Gopuram('Gopuram', 'Gopuram', 'an optional tech label')
@enduml
```

