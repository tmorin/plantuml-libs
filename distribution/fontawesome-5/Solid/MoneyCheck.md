# MoneyCheck


```text
fontawesome-5/Solid/MoneyCheck
```

```text
include('fontawesome-5/Solid/MoneyCheck')
```



| Illustration | MoneyCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/MoneyCheck.png) | ![illustration for MoneyCheck](../../fontawesome-5/Solid/MoneyCheck.Local.png) |




## MoneyCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element MoneyCheck
include('fontawesome-5/Solid/MoneyCheck')

' renders the element
MoneyCheck('MoneyCheck', 'Money Check', 'an optional tech label')
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

' loads the Item which embeds the element MoneyCheck
include('fontawesome-5/Solid/MoneyCheck')

' renders the element
MoneyCheck('MoneyCheck', 'Money Check', 'an optional tech label')
@enduml
```

