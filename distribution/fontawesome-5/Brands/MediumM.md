# MediumM


```text
fontawesome-5/Brands/MediumM
```

```text
include('fontawesome-5/Brands/MediumM')
```



| Illustration | MediumM |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/MediumM.png) | ![illustration for MediumM](../../fontawesome-5/Brands/MediumM.Local.png) |




## MediumM

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MediumM
include('fontawesome-5/Brands/MediumM')

' renders the element
MediumM('MediumM', 'Medium M', 'an optional tech label')
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

' loads the Item which embeds the element MediumM
include('fontawesome-5/Brands/MediumM')

' renders the element
MediumM('MediumM', 'Medium M', 'an optional tech label')
@enduml
```

