# HandsAslInterpreting


```text
fontawesome/Solid/HandsAslInterpreting
```

```text
include('fontawesome/Solid/HandsAslInterpreting')
```



| Illustration | HandsAslInterpreting |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandsAslInterpreting.png) | ![illustration for HandsAslInterpreting](../../fontawesome/Solid/HandsAslInterpreting.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandsAslInterpretingXs>`
- `<$HandsAslInterpretingSm>`
- `<$HandsAslInterpretingMd>`
- `<$HandsAslInterpretingLg>`





## HandsAslInterpreting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandsAslInterpreting
include('fontawesome/Solid/HandsAslInterpreting')

' renders the element
HandsAslInterpreting('HandsAslInterpreting', 'Hands Asl Interpreting', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandsAslInterpreting
include('fontawesome/Solid/HandsAslInterpreting')

' renders the element
HandsAslInterpreting('HandsAslInterpreting', 'Hands Asl Interpreting', 'an optional tech label', 'an optional description')
@enduml
```

