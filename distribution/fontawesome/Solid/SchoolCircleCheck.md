# SchoolCircleCheck


```text
fontawesome/Solid/SchoolCircleCheck
```

```text
include('fontawesome/Solid/SchoolCircleCheck')
```



| Illustration | SchoolCircleCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SchoolCircleCheck.png) | ![illustration for SchoolCircleCheck](../../fontawesome/Solid/SchoolCircleCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SchoolCircleCheckXs>`
- `<$SchoolCircleCheckSm>`
- `<$SchoolCircleCheckMd>`
- `<$SchoolCircleCheckLg>`





## SchoolCircleCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SchoolCircleCheck
include('fontawesome/Solid/SchoolCircleCheck')

' renders the element
SchoolCircleCheck('SchoolCircleCheck', 'School Circle Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SchoolCircleCheck
include('fontawesome/Solid/SchoolCircleCheck')

' renders the element
SchoolCircleCheck('SchoolCircleCheck', 'School Circle Check', 'an optional tech label', 'an optional description')
@enduml
```

