# Ebay


```text
fontawesome-5/Brands/Ebay
```

```text
include('fontawesome-5/Brands/Ebay')
```



| Illustration | Ebay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Ebay.png) | ![illustration for Ebay](../../fontawesome-5/Brands/Ebay.Local.png) |




## Ebay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Ebay
include('fontawesome-5/Brands/Ebay')

' renders the element
Ebay('Ebay', 'Ebay', 'an optional tech label')
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

' loads the Item which embeds the element Ebay
include('fontawesome-5/Brands/Ebay')

' renders the element
Ebay('Ebay', 'Ebay', 'an optional tech label')
@enduml
```

