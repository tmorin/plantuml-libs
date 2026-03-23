# SwimmingPool


```text
fontawesome/Solid/SwimmingPool
```

```text
include('fontawesome/Solid/SwimmingPool')
```



| Illustration | SwimmingPool |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SwimmingPool.png) | ![illustration for SwimmingPool](../../fontawesome/Solid/SwimmingPool.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwimmingPoolXs>`
- `<$SwimmingPoolSm>`
- `<$SwimmingPoolMd>`
- `<$SwimmingPoolLg>`





## SwimmingPool

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SwimmingPool
include('fontawesome/Solid/SwimmingPool')

' renders the element
SwimmingPool('SwimmingPool', 'Swimming Pool', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SwimmingPool
include('fontawesome/Solid/SwimmingPool')

' renders the element
SwimmingPool('SwimmingPool', 'Swimming Pool', 'an optional tech label', 'an optional description')
@enduml
```

