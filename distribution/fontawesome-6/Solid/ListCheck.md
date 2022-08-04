# ListCheck


```text
fontawesome-6/Solid/ListCheck
```

```text
include('fontawesome-6/Solid/ListCheck')
```



| Illustration | ListCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ListCheck.png) | ![illustration for ListCheck](../../fontawesome-6/Solid/ListCheck.Local.png) |




## ListCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ListCheck
include('fontawesome-6/Solid/ListCheck')

' renders the element
ListCheck('ListCheck', 'List Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ListCheck
include('fontawesome-6/Solid/ListCheck')

' renders the element
ListCheck('ListCheck', 'List Check', 'an optional tech label', 'an optional description')
@enduml
```

