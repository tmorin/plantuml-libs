# CircleExclamation


```text
fontawesome/Solid/CircleExclamation
```

```text
include('fontawesome/Solid/CircleExclamation')
```



| Illustration | CircleExclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CircleExclamation.png) | ![illustration for CircleExclamation](../../fontawesome/Solid/CircleExclamation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleExclamationXs>`
- `<$CircleExclamationSm>`
- `<$CircleExclamationMd>`
- `<$CircleExclamationLg>`





## CircleExclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleExclamation
include('fontawesome/Solid/CircleExclamation')

' renders the element
CircleExclamation('CircleExclamation', 'Circle Exclamation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleExclamation
include('fontawesome/Solid/CircleExclamation')

' renders the element
CircleExclamation('CircleExclamation', 'Circle Exclamation', 'an optional tech label', 'an optional description')
@enduml
```

