# SquareRss


```text
fontawesome-6/Solid/SquareRss
```

```text
include('fontawesome-6/Solid/SquareRss')
```



| Illustration | SquareRss |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquareRss.png) | ![illustration for SquareRss](../../fontawesome-6/Solid/SquareRss.Local.png) |




## SquareRss

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareRss
include('fontawesome-6/Solid/SquareRss')

' renders the element
SquareRss('SquareRss', 'Square Rss', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareRss
include('fontawesome-6/Solid/SquareRss')

' renders the element
SquareRss('SquareRss', 'Square Rss', 'an optional tech label', 'an optional description')
@enduml
```

