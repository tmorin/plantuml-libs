# Salesforce


```text
simpleicons-8/S/Salesforce
```

```text
include('simpleicons-8/S/Salesforce')
```



| Illustration | Salesforce |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Salesforce.png) | ![illustration for Salesforce](../../simpleicons-8/S/Salesforce.Local.png) |




## Salesforce

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Salesforce
include('simpleicons-8/S/Salesforce')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Salesforce
include('simpleicons-8/S/Salesforce')

' renders the element
Salesforce('Salesforce', 'Salesforce', 'an optional tech label', 'an optional description')
@enduml
```

