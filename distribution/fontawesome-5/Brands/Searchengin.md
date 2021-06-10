# Searchengin


```text
fontawesome-5/Brands/Searchengin
```

```text
include('fontawesome-5/Brands/Searchengin')
```



| Illustration | Searchengin |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Searchengin.png) | ![illustration for Searchengin](../../fontawesome-5/Brands/Searchengin.Local.png) |




## Searchengin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Searchengin
include('fontawesome-5/Brands/Searchengin')

' renders the element
Searchengin('Searchengin', 'Searchengin', 'an optional tech label')
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

' loads the Item which embeds the element Searchengin
include('fontawesome-5/Brands/Searchengin')

' renders the element
Searchengin('Searchengin', 'Searchengin', 'an optional tech label')
@enduml
```

