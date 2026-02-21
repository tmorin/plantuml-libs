# Contacts


```text
material/Communication/Contacts
```

```text
include('material/Communication/Contacts')
```



| Illustration | Contacts |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/Contacts.png) | ![illustration for Contacts](../../material/Communication/Contacts.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContactsXs>`
- `<$ContactsSm>`
- `<$ContactsMd>`
- `<$ContactsLg>`





## Contacts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Contacts
include('material/Communication/Contacts')

' renders the element
Contacts('Contacts', 'Contacts', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Contacts
include('material/Communication/Contacts')

' renders the element
Contacts('Contacts', 'Contacts', 'an optional tech label', 'an optional description')
@enduml
```

