# HandScissors


```text
fontawesome/Solid/HandScissors
```

```text
include('fontawesome/Solid/HandScissors')
```



| Illustration | HandScissors |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HandScissors.png) | ![illustration for HandScissors](../../fontawesome/Solid/HandScissors.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HandScissorsXs>`
- `<$HandScissorsSm>`
- `<$HandScissorsMd>`
- `<$HandScissorsLg>`





## HandScissors

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HandScissors
include('fontawesome/Solid/HandScissors')

' renders the element
HandScissors('HandScissors', 'Hand Scissors', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HandScissors
include('fontawesome/Solid/HandScissors')

' renders the element
HandScissors('HandScissors', 'Hand Scissors', 'an optional tech label', 'an optional description')
@enduml
```

