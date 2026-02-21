# VialCircleCheck


```text
fontawesome/Solid/VialCircleCheck
```

```text
include('fontawesome/Solid/VialCircleCheck')
```



| Illustration | VialCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VialCircleCheck.png) | ![illustration for VialCircleCheck](../../fontawesome/Solid/VialCircleCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VialCircleCheckXs>`
- `<$VialCircleCheckSm>`
- `<$VialCircleCheckMd>`
- `<$VialCircleCheckLg>`





## VialCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VialCircleCheck
include('fontawesome/Solid/VialCircleCheck')

' renders the element
VialCircleCheck('VialCircleCheck', 'Vial Circle Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VialCircleCheck
include('fontawesome/Solid/VialCircleCheck')

' renders the element
VialCircleCheck('VialCircleCheck', 'Vial Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

