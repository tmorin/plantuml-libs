# Deviantart


```text
fontawesome-5/Brands/Deviantart
```

```text
include('fontawesome-5/Brands/Deviantart')
```



| Illustration | Deviantart |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Deviantart.png) | ![illustration for Deviantart](../../fontawesome-5/Brands/Deviantart.Local.png) |




## Deviantart

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Deviantart
include('fontawesome-5/Brands/Deviantart')

' renders the element
Deviantart('Deviantart', 'Deviantart', 'an optional tech label')
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

' loads the Item which embeds the element Deviantart
include('fontawesome-5/Brands/Deviantart')

' renders the element
Deviantart('Deviantart', 'Deviantart', 'an optional tech label')
@enduml
```

