# Gripfire


```text
fontawesome-6/Brands/Gripfire
```

```text
include('fontawesome-6/Brands/Gripfire')
```



| Illustration | Gripfire |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Gripfire.png) | ![illustration for Gripfire](../../fontawesome-6/Brands/Gripfire.Local.png) |




## Gripfire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gripfire
include('fontawesome-6/Brands/Gripfire')

' renders the element
Gripfire('Gripfire', 'Gripfire', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gripfire
include('fontawesome-6/Brands/Gripfire')

' renders the element
Gripfire('Gripfire', 'Gripfire', 'an optional tech label', 'an optional description')
@enduml
```

