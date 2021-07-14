# ImportContacts


```text
material-4/Communication/ImportContacts
```

```text
include('material-4/Communication/ImportContacts')
```



| Illustration | ImportContacts |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/ImportContacts.png) | ![illustration for ImportContacts](../../material-4/Communication/ImportContacts.Local.png) |




## ImportContacts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ImportContacts
include('material-4/Communication/ImportContacts')

' renders the element
ImportContacts('ImportContacts', 'Import Contacts', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element ImportContacts
include('material-4/Communication/ImportContacts')

' renders the element
ImportContacts('ImportContacts', 'Import Contacts', 'an optional tech label')
@enduml
```

