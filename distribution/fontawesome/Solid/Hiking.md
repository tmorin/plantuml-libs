# Hiking


```text
fontawesome/Solid/Hiking
```

```text
include('fontawesome/Solid/Hiking')
```



| Illustration | Hiking |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Hiking.png) | ![illustration for Hiking](../../fontawesome/Solid/Hiking.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HikingXs>`
- `<$HikingSm>`
- `<$HikingMd>`
- `<$HikingLg>`





## Hiking

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Hiking
include('fontawesome/Solid/Hiking')

' renders the element
Hiking('Hiking', 'Hiking', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hiking
include('fontawesome/Solid/Hiking')

' renders the element
Hiking('Hiking', 'Hiking', 'an optional tech label', 'an optional description')
@enduml
```

