# HandHolding


```text
fontawesome-6/Solid/HandHolding
```

```text
include('fontawesome-6/Solid/HandHolding')
```



| Illustration | HandHolding |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandHolding.png) | ![illustration for HandHolding](../../fontawesome-6/Solid/HandHolding.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandHoldingXs>`
- `<$HandHoldingSm>`
- `<$HandHoldingMd>`
- `<$HandHoldingLg>`





## HandHolding

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandHolding
include('fontawesome-6/Solid/HandHolding')

' renders the element
HandHolding('HandHolding', 'Hand Holding', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandHolding
include('fontawesome-6/Solid/HandHolding')

' renders the element
HandHolding('HandHolding', 'Hand Holding', 'an optional tech label', 'an optional description')
@enduml
```

