# PersonCircleCheck


```text
fontawesome/Solid/PersonCircleCheck
```

```text
include('fontawesome/Solid/PersonCircleCheck')
```



| Illustration | PersonCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PersonCircleCheck.png) | ![illustration for PersonCircleCheck](../../fontawesome/Solid/PersonCircleCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonCircleCheckXs>`
- `<$PersonCircleCheckSm>`
- `<$PersonCircleCheckMd>`
- `<$PersonCircleCheckLg>`





## PersonCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PersonCircleCheck
include('fontawesome/Solid/PersonCircleCheck')

' renders the element
PersonCircleCheck('PersonCircleCheck', 'Person Circle Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonCircleCheck
include('fontawesome/Solid/PersonCircleCheck')

' renders the element
PersonCircleCheck('PersonCircleCheck', 'Person Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

