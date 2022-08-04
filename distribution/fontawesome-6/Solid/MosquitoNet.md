# MosquitoNet


```text
fontawesome-6/Solid/MosquitoNet
```

```text
include('fontawesome-6/Solid/MosquitoNet')
```



| Illustration | MosquitoNet |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/MosquitoNet.png) | ![illustration for MosquitoNet](../../fontawesome-6/Solid/MosquitoNet.Local.png) |




## MosquitoNet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element MosquitoNet
include('fontawesome-6/Solid/MosquitoNet')

' renders the element
MosquitoNet('MosquitoNet', 'Mosquito Net', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MosquitoNet
include('fontawesome-6/Solid/MosquitoNet')

' renders the element
MosquitoNet('MosquitoNet', 'Mosquito Net', 'an optional tech label', 'an optional description')
@enduml
```

