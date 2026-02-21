# HandsHolding


```text
fontawesome/Solid/HandsHolding
```

```text
include('fontawesome/Solid/HandsHolding')
```



| Illustration | HandsHolding |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandsHolding.png) | ![illustration for HandsHolding](../../fontawesome/Solid/HandsHolding.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandsHoldingXs>`
- `<$HandsHoldingSm>`
- `<$HandsHoldingMd>`
- `<$HandsHoldingLg>`





## HandsHolding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandsHolding
include('fontawesome/Solid/HandsHolding')

' renders the element
HandsHolding('HandsHolding', 'Hands Holding', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandsHolding
include('fontawesome/Solid/HandsHolding')

' renders the element
HandsHolding('HandsHolding', 'Hands Holding', 'an optional tech label', 'an optional description')
@enduml
```

