# Bicycle


```text
fontawesome/Solid/Bicycle
```

```text
include('fontawesome/Solid/Bicycle')
```



| Illustration | Bicycle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Bicycle.png) | ![illustration for Bicycle](../../fontawesome/Solid/Bicycle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BicycleXs>`
- `<$BicycleSm>`
- `<$BicycleMd>`
- `<$BicycleLg>`





## Bicycle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Bicycle
include('fontawesome/Solid/Bicycle')

' renders the element
Bicycle('Bicycle', 'Bicycle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bicycle
include('fontawesome/Solid/Bicycle')

' renders the element
Bicycle('Bicycle', 'Bicycle', 'an optional tech label', 'an optional description')
@enduml
```

