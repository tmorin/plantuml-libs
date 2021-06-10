# Blackberry


```text
fontawesome-5/Brands/Blackberry
```

```text
include('fontawesome-5/Brands/Blackberry')
```



| Illustration | Blackberry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Blackberry.png) | ![illustration for Blackberry](../../fontawesome-5/Brands/Blackberry.Local.png) |




## Blackberry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Blackberry
include('fontawesome-5/Brands/Blackberry')

' renders the element
Blackberry('Blackberry', 'Blackberry', 'an optional tech label')
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

' loads the Item which embeds the element Blackberry
include('fontawesome-5/Brands/Blackberry')

' renders the element
Blackberry('Blackberry', 'Blackberry', 'an optional tech label')
@enduml
```

