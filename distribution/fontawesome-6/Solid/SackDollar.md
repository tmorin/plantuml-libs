# SackDollar


```text
fontawesome-6/Solid/SackDollar
```

```text
include('fontawesome-6/Solid/SackDollar')
```



| Illustration | SackDollar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SackDollar.png) | ![illustration for SackDollar](../../fontawesome-6/Solid/SackDollar.Local.png) |




## SackDollar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SackDollar
include('fontawesome-6/Solid/SackDollar')

' renders the element
SackDollar('SackDollar', 'Sack Dollar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SackDollar
include('fontawesome-6/Solid/SackDollar')

' renders the element
SackDollar('SackDollar', 'Sack Dollar', 'an optional tech label', 'an optional description')
@enduml
```

