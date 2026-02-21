# ImportContacts


```text
material/Communication/ImportContacts
```

```text
include('material/Communication/ImportContacts')
```



| Illustration | ImportContacts |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/ImportContacts.png) | ![illustration for ImportContacts](../../material/Communication/ImportContacts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImportContactsXs>`
- `<$ImportContactsSm>`
- `<$ImportContactsMd>`
- `<$ImportContactsLg>`





## ImportContacts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ImportContacts
include('material/Communication/ImportContacts')

' renders the element
ImportContacts('ImportContacts', 'Import Contacts', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element ImportContacts
include('material/Communication/ImportContacts')

' renders the element
ImportContacts('ImportContacts', 'Import Contacts', 'an optional tech label', 'an optional description')
@enduml
```

