# AddressBook


```text
fontawesome/Solid/AddressBook
```

```text
include('fontawesome/Solid/AddressBook')
```



| Illustration | AddressBook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AddressBook.png) | ![illustration for AddressBook](../../fontawesome/Solid/AddressBook.Local.png) |



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
include('fontawesome/Solid/AddressBook')

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
include('fontawesome/Solid/AddressBook')

' renders the element
AddressBook('AddressBook', 'Address Book', 'an optional tech label', 'an optional description')
@enduml
```

