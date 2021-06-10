# Gratipay


```text
fontawesome-5/Brands/Gratipay
```

```text
include('fontawesome-5/Brands/Gratipay')
```



| Illustration | Gratipay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Gratipay.png) | ![illustration for Gratipay](../../fontawesome-5/Brands/Gratipay.Local.png) |




## Gratipay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gratipay
include('fontawesome-5/Brands/Gratipay')

' renders the element
Gratipay('Gratipay', 'Gratipay', 'an optional tech label')
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

' loads the Item which embeds the element Gratipay
include('fontawesome-5/Brands/Gratipay')

' renders the element
Gratipay('Gratipay', 'Gratipay', 'an optional tech label')
@enduml
```

