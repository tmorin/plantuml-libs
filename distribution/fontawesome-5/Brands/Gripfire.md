# Gripfire


```text
fontawesome-5/Brands/Gripfire
```

```text
include('fontawesome-5/Brands/Gripfire')
```



| Illustration | Gripfire |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Gripfire.png) | ![illustration for Gripfire](../../fontawesome-5/Brands/Gripfire.Local.png) |




## Gripfire

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gripfire
include('fontawesome-5/Brands/Gripfire')

' renders the element
Gripfire('Gripfire', 'Gripfire', 'an optional tech label')
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

' loads the Item which embeds the element Gripfire
include('fontawesome-5/Brands/Gripfire')

' renders the element
Gripfire('Gripfire', 'Gripfire', 'an optional tech label')
@enduml
```

