# QuoteLeft


```text
fontawesome-5/Solid/QuoteLeft
```

```text
include('fontawesome-5/Solid/QuoteLeft')
```



| Illustration | QuoteLeft |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/QuoteLeft.png) | ![illustration for QuoteLeft](../../fontawesome-5/Solid/QuoteLeft.Local.png) |




## QuoteLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element QuoteLeft
include('fontawesome-5/Solid/QuoteLeft')

' renders the element
QuoteLeft('QuoteLeft', 'Quote Left', 'an optional tech label')
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

' loads the Item which embeds the element QuoteLeft
include('fontawesome-5/Solid/QuoteLeft')

' renders the element
QuoteLeft('QuoteLeft', 'Quote Left', 'an optional tech label')
@enduml
```

