# ICursor


```text
fontawesome-6/Solid/ICursor
```

```text
include('fontawesome-6/Solid/ICursor')
```



| Illustration | ICursor |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ICursor.png) | ![illustration for ICursor](../../fontawesome-6/Solid/ICursor.Local.png) |




## ICursor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ICursor
include('fontawesome-6/Solid/ICursor')

' renders the element
ICursor('ICursor', 'I Cursor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ICursor
include('fontawesome-6/Solid/ICursor')

' renders the element
ICursor('ICursor', 'I Cursor', 'an optional tech label', 'an optional description')
@enduml
```

