# Contacts


```text
material-4/Communication/Contacts
```

```text
include('material-4/Communication/Contacts')
```



| Illustration | Contacts |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/Contacts.png) | ![illustration for Contacts](../../material-4/Communication/Contacts.Local.png) |




## Contacts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Contacts
include('material-4/Communication/Contacts')

' renders the element
Contacts('Contacts', 'Contacts', 'an optional tech label')
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

' loads the Item which embeds the element Contacts
include('material-4/Communication/Contacts')

' renders the element
Contacts('Contacts', 'Contacts', 'an optional tech label')
@enduml
```

