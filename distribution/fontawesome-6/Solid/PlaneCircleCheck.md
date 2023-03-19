# PlaneCircleCheck


```text
fontawesome-6/Solid/PlaneCircleCheck
```

```text
include('fontawesome-6/Solid/PlaneCircleCheck')
```



| Illustration | PlaneCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PlaneCircleCheck.png) | ![illustration for PlaneCircleCheck](../../fontawesome-6/Solid/PlaneCircleCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaneCircleCheckXs>`
- `<$PlaneCircleCheckSm>`
- `<$PlaneCircleCheckMd>`
- `<$PlaneCircleCheckLg>`





## PlaneCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PlaneCircleCheck
include('fontawesome-6/Solid/PlaneCircleCheck')

' renders the element
PlaneCircleCheck('PlaneCircleCheck', 'Plane Circle Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlaneCircleCheck
include('fontawesome-6/Solid/PlaneCircleCheck')

' renders the element
PlaneCircleCheck('PlaneCircleCheck', 'Plane Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

