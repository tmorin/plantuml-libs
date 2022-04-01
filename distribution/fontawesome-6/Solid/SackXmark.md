# SackXmark


```text
fontawesome-6/Solid/SackXmark
```

```text
include('fontawesome-6/Solid/SackXmark')
```



| Illustration | SackXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SackXmark.png) | ![illustration for SackXmark](../../fontawesome-6/Solid/SackXmark.Local.png) |




## SackXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SackXmark
include('fontawesome-6/Solid/SackXmark')

' renders the element
SackXmark('SackXmark', 'Sack Xmark', 'an optional tech label')
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

' loads the Item which embeds the element SackXmark
include('fontawesome-6/Solid/SackXmark')

' renders the element
SackXmark('SackXmark', 'Sack Xmark', 'an optional tech label')
@enduml
```

