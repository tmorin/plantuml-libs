# QuoteLeft


```text
fontawesome-6/Solid/QuoteLeft
```

```text
include('fontawesome-6/Solid/QuoteLeft')
```



| Illustration | QuoteLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/QuoteLeft.png) | ![illustration for QuoteLeft](../../fontawesome-6/Solid/QuoteLeft.Local.png) |




## QuoteLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element QuoteLeft
include('fontawesome-6/Solid/QuoteLeft')

' renders the element
QuoteLeft('QuoteLeft', 'Quote Left', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element QuoteLeft
include('fontawesome-6/Solid/QuoteLeft')

' renders the element
QuoteLeft('QuoteLeft', 'Quote Left', 'an optional tech label', 'an optional description')
@enduml
```

