# AnchorCircleExclamation


```text
fontawesome/Solid/AnchorCircleExclamation
```

```text
include('fontawesome/Solid/AnchorCircleExclamation')
```



| Illustration | AnchorCircleExclamation |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AnchorCircleExclamation.png) | ![illustration for AnchorCircleExclamation](../../fontawesome/Solid/AnchorCircleExclamation.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AnchorCircleExclamationXs>`
- `<$AnchorCircleExclamationSm>`
- `<$AnchorCircleExclamationMd>`
- `<$AnchorCircleExclamationLg>`





## AnchorCircleExclamation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AnchorCircleExclamation
include('fontawesome/Solid/AnchorCircleExclamation')

' renders the element
AnchorCircleExclamation('AnchorCircleExclamation', 'Anchor Circle Exclamation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AnchorCircleExclamation
include('fontawesome/Solid/AnchorCircleExclamation')

' renders the element
AnchorCircleExclamation('AnchorCircleExclamation', 'Anchor Circle Exclamation', 'an optional tech label', 'an optional description')
@enduml
```

