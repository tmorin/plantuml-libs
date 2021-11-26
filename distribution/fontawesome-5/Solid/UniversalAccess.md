# UniversalAccess


```text
fontawesome-5/Solid/UniversalAccess
```

```text
include('fontawesome-5/Solid/UniversalAccess')
```



| Illustration | UniversalAccess |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UniversalAccess.png) | ![illustration for UniversalAccess](../../fontawesome-5/Solid/UniversalAccess.Local.png) |




## UniversalAccess

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UniversalAccess
include('fontawesome-5/Solid/UniversalAccess')

' renders the element
UniversalAccess('UniversalAccess', 'Universal Access', 'an optional tech label')
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

' loads the Item which embeds the element UniversalAccess
include('fontawesome-5/Solid/UniversalAccess')

' renders the element
UniversalAccess('UniversalAccess', 'Universal Access', 'an optional tech label')
@enduml
```

