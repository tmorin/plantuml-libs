# SchoolCircleExclamation


```text
fontawesome/Solid/SchoolCircleExclamation
```

```text
include('fontawesome/Solid/SchoolCircleExclamation')
```



| Illustration | SchoolCircleExclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SchoolCircleExclamation.png) | ![illustration for SchoolCircleExclamation](../../fontawesome/Solid/SchoolCircleExclamation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SchoolCircleExclamationXs>`
- `<$SchoolCircleExclamationSm>`
- `<$SchoolCircleExclamationMd>`
- `<$SchoolCircleExclamationLg>`





## SchoolCircleExclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SchoolCircleExclamation
include('fontawesome/Solid/SchoolCircleExclamation')

' renders the element
SchoolCircleExclamation('SchoolCircleExclamation', 'School Circle Exclamation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SchoolCircleExclamation
include('fontawesome/Solid/SchoolCircleExclamation')

' renders the element
SchoolCircleExclamation('SchoolCircleExclamation', 'School Circle Exclamation', 'an optional tech label', 'an optional description')
@enduml
```

