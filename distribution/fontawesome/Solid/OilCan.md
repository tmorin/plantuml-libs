# OilCan


```text
fontawesome/Solid/OilCan
```

```text
include('fontawesome/Solid/OilCan')
```



| Illustration | OilCan |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/OilCan.png) | ![illustration for OilCan](../../fontawesome/Solid/OilCan.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OilCanXs>`
- `<$OilCanSm>`
- `<$OilCanMd>`
- `<$OilCanLg>`





## OilCan

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element OilCan
include('fontawesome/Solid/OilCan')

' renders the element
OilCan('OilCan', 'Oil Can', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element OilCan
include('fontawesome/Solid/OilCan')

' renders the element
OilCan('OilCan', 'Oil Can', 'an optional tech label', 'an optional description')
@enduml
```

