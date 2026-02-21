# CheckDouble


```text
fontawesome/Solid/CheckDouble
```

```text
include('fontawesome/Solid/CheckDouble')
```



| Illustration | CheckDouble |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CheckDouble.png) | ![illustration for CheckDouble](../../fontawesome/Solid/CheckDouble.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CheckDoubleXs>`
- `<$CheckDoubleSm>`
- `<$CheckDoubleMd>`
- `<$CheckDoubleLg>`





## CheckDouble

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CheckDouble
include('fontawesome/Solid/CheckDouble')

' renders the element
CheckDouble('CheckDouble', 'Check Double', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CheckDouble
include('fontawesome/Solid/CheckDouble')

' renders the element
CheckDouble('CheckDouble', 'Check Double', 'an optional tech label', 'an optional description')
@enduml
```

