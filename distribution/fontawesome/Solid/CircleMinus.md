# CircleMinus


```text
fontawesome/Solid/CircleMinus
```

```text
include('fontawesome/Solid/CircleMinus')
```



| Illustration | CircleMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CircleMinus.png) | ![illustration for CircleMinus](../../fontawesome/Solid/CircleMinus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleMinusXs>`
- `<$CircleMinusSm>`
- `<$CircleMinusMd>`
- `<$CircleMinusLg>`





## CircleMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleMinus
include('fontawesome/Solid/CircleMinus')

' renders the element
CircleMinus('CircleMinus', 'Circle Minus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleMinus
include('fontawesome/Solid/CircleMinus')

' renders the element
CircleMinus('CircleMinus', 'Circle Minus', 'an optional tech label', 'an optional description')
@enduml
```

