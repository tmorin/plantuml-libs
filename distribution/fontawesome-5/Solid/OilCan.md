# OilCan


```text
fontawesome-5/Solid/OilCan
```

```text
include('fontawesome-5/Solid/OilCan')
```



| Illustration | OilCan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/OilCan.png) | ![illustration for OilCan](../../fontawesome-5/Solid/OilCan.Local.png) |




## OilCan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element OilCan
include('fontawesome-5/Solid/OilCan')

' renders the element
OilCan('OilCan', 'Oil Can', 'an optional tech label')
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

' loads the Item which embeds the element OilCan
include('fontawesome-5/Solid/OilCan')

' renders the element
OilCan('OilCan', 'Oil Can', 'an optional tech label')
@enduml
```

