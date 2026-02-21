# CircleCheck


```text
fontawesome/Solid/CircleCheck
```

```text
include('fontawesome/Solid/CircleCheck')
```



| Illustration | CircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CircleCheck.png) | ![illustration for CircleCheck](../../fontawesome/Solid/CircleCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleCheckXs>`
- `<$CircleCheckSm>`
- `<$CircleCheckMd>`
- `<$CircleCheckLg>`





## CircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleCheck
include('fontawesome/Solid/CircleCheck')

' renders the element
CircleCheck('CircleCheck', 'Circle Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleCheck
include('fontawesome/Solid/CircleCheck')

' renders the element
CircleCheck('CircleCheck', 'Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

