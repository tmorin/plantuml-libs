# CarCrash


```text
fontawesome/Solid/CarCrash
```

```text
include('fontawesome/Solid/CarCrash')
```



| Illustration | CarCrash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CarCrash.png) | ![illustration for CarCrash](../../fontawesome/Solid/CarCrash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CarCrashXs>`
- `<$CarCrashSm>`
- `<$CarCrashMd>`
- `<$CarCrashLg>`





## CarCrash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CarCrash
include('fontawesome/Solid/CarCrash')

' renders the element
CarCrash('CarCrash', 'Car Crash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CarCrash
include('fontawesome/Solid/CarCrash')

' renders the element
CarCrash('CarCrash', 'Car Crash', 'an optional tech label', 'an optional description')
@enduml
```

