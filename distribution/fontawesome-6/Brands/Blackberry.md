# Blackberry


```text
fontawesome-6/Brands/Blackberry
```

```text
include('fontawesome-6/Brands/Blackberry')
```



| Illustration | Blackberry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Blackberry.png) | ![illustration for Blackberry](../../fontawesome-6/Brands/Blackberry.Local.png) |




## Blackberry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Blackberry
include('fontawesome-6/Brands/Blackberry')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Blackberry
include('fontawesome-6/Brands/Blackberry')

' renders the element
Blackberry('Blackberry', 'Blackberry', 'an optional tech label')
@enduml
```

