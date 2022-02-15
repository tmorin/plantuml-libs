# Salesforce


```text
fontawesome-6/Brands/Salesforce
```

```text
include('fontawesome-6/Brands/Salesforce')
```



| Illustration | Salesforce |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Salesforce.png) | ![illustration for Salesforce](../../fontawesome-6/Brands/Salesforce.Local.png) |




## Salesforce

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Salesforce
include('fontawesome-6/Brands/Salesforce')

' renders the element
Salesforce('Salesforce', 'Salesforce', 'an optional tech label')
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

' loads the Item which embeds the element Salesforce
include('fontawesome-6/Brands/Salesforce')

' renders the element
Salesforce('Salesforce', 'Salesforce', 'an optional tech label')
@enduml
```

