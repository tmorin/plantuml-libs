# Salesforce


```text
fontawesome/Brands/Salesforce
```

```text
include('fontawesome/Brands/Salesforce')
```



| Illustration | Salesforce |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Salesforce.png) | ![illustration for Salesforce](../../fontawesome/Brands/Salesforce.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SalesforceXs>`
- `<$SalesforceSm>`
- `<$SalesforceMd>`
- `<$SalesforceLg>`





## Salesforce

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Salesforce
include('fontawesome/Brands/Salesforce')

' renders the element
Salesforce('Salesforce', 'Salesforce', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Salesforce
include('fontawesome/Brands/Salesforce')

' renders the element
Salesforce('Salesforce', 'Salesforce', 'an optional tech label', 'an optional description')
@enduml
```

