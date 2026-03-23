# AslInterpreting


```text
fontawesome/Solid/AslInterpreting
```

```text
include('fontawesome/Solid/AslInterpreting')
```



| Illustration | AslInterpreting |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AslInterpreting.png) | ![illustration for AslInterpreting](../../fontawesome/Solid/AslInterpreting.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AslInterpretingXs>`
- `<$AslInterpretingSm>`
- `<$AslInterpretingMd>`
- `<$AslInterpretingLg>`





## AslInterpreting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AslInterpreting
include('fontawesome/Solid/AslInterpreting')

' renders the element
AslInterpreting('AslInterpreting', 'Asl Interpreting', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AslInterpreting
include('fontawesome/Solid/AslInterpreting')

' renders the element
AslInterpreting('AslInterpreting', 'Asl Interpreting', 'an optional tech label', 'an optional description')
@enduml
```

