# Ebay


```text
fontawesome-6/Brands/Ebay
```

```text
include('fontawesome-6/Brands/Ebay')
```



| Illustration | Ebay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Ebay.png) | ![illustration for Ebay](../../fontawesome-6/Brands/Ebay.Local.png) |




## Ebay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ebay
include('fontawesome-6/Brands/Ebay')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Ebay
include('fontawesome-6/Brands/Ebay')

' renders the element
Ebay('Ebay', 'Ebay', 'an optional tech label')
@enduml
```

