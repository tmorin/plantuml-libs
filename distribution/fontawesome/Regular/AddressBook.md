# AddressBook


```text
fontawesome/Regular/AddressBook
```

```text
include('fontawesome/Regular/AddressBook')
```



| Illustration | AddressBook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/AddressBook.png) | ![illustration for AddressBook](../../fontawesome/Regular/AddressBook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AddressBookXs>`
- `<$AddressBookSm>`
- `<$AddressBookMd>`
- `<$AddressBookLg>`





## AddressBook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AddressBook
include('fontawesome/Regular/AddressBook')

' renders the element
AddressBook('AddressBook', 'Address Book', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AddressBook
include('fontawesome/Regular/AddressBook')

' renders the element
AddressBook('AddressBook', 'Address Book', 'an optional tech label', 'an optional description')
@enduml
```

