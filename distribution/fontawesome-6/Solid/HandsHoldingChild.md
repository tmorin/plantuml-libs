# HandsHoldingChild


```text
fontawesome-6/Solid/HandsHoldingChild
```

```text
include('fontawesome-6/Solid/HandsHoldingChild')
```



| Illustration | HandsHoldingChild |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/HandsHoldingChild.png) | ![illustration for HandsHoldingChild](../../fontawesome-6/Solid/HandsHoldingChild.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandsHoldingChildXs>`
- `<$HandsHoldingChildSm>`
- `<$HandsHoldingChildMd>`
- `<$HandsHoldingChildLg>`





## HandsHoldingChild

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HandsHoldingChild
include('fontawesome-6/Solid/HandsHoldingChild')

' renders the element
HandsHoldingChild('HandsHoldingChild', 'Hands Holding Child', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandsHoldingChild
include('fontawesome-6/Solid/HandsHoldingChild')

' renders the element
HandsHoldingChild('HandsHoldingChild', 'Hands Holding Child', 'an optional tech label', 'an optional description')
@enduml
```

