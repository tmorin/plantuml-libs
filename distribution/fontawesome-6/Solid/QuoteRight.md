# QuoteRight


```text
fontawesome-6/Solid/QuoteRight
```

```text
include('fontawesome-6/Solid/QuoteRight')
```



| Illustration | QuoteRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/QuoteRight.png) | ![illustration for QuoteRight](../../fontawesome-6/Solid/QuoteRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QuoteRightXs>`
- `<$QuoteRightSm>`
- `<$QuoteRightMd>`
- `<$QuoteRightLg>`





## QuoteRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element QuoteRight
include('fontawesome-6/Solid/QuoteRight')

' renders the element
QuoteRight('QuoteRight', 'Quote Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element QuoteRight
include('fontawesome-6/Solid/QuoteRight')

' renders the element
QuoteRight('QuoteRight', 'Quote Right', 'an optional tech label', 'an optional description')
@enduml
```

