# HandScissors


```text
fontawesome/Regular/HandScissors
```

```text
include('fontawesome/Regular/HandScissors')
```



| Illustration | HandScissors |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/HandScissors.png) | ![illustration for HandScissors](../../fontawesome/Regular/HandScissors.Local.png) |



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
include('fontawesome/Regular/HandScissors')

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
include('fontawesome/Regular/HandScissors')

' renders the element
HandScissors('HandScissors', 'Hand Scissors', 'an optional tech label', 'an optional description')
@enduml
```

