# QuoteRight


```text
fontawesome-5/Solid/QuoteRight
```

```text
include('fontawesome-5/Solid/QuoteRight')
```



| Illustration | QuoteRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/QuoteRight.png) | ![illustration for QuoteRight](../../fontawesome-5/Solid/QuoteRight.Local.png) |




## QuoteRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element QuoteRight
include('fontawesome-5/Solid/QuoteRight')

' renders the element
QuoteRight('QuoteRight', 'Quote Right', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element QuoteRight
include('fontawesome-5/Solid/QuoteRight')

' renders the element
QuoteRight('QuoteRight', 'Quote Right', 'an optional tech label')
@enduml
```

