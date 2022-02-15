# Flipboard


```text
fontawesome-6/Brands/Flipboard
```

```text
include('fontawesome-6/Brands/Flipboard')
```



| Illustration | Flipboard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Flipboard.png) | ![illustration for Flipboard](../../fontawesome-6/Brands/Flipboard.Local.png) |




## Flipboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Flipboard
include('fontawesome-6/Brands/Flipboard')

' renders the element
Flipboard('Flipboard', 'Flipboard', 'an optional tech label')
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

' loads the Item which embeds the element Flipboard
include('fontawesome-6/Brands/Flipboard')

' renders the element
Flipboard('Flipboard', 'Flipboard', 'an optional tech label')
@enduml
```

