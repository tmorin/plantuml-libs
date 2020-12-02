# Address Book

```text
fontawesome-5.15/Regular/AddressBook
```

```text
include('fontawesome-5.15/Regular/AddressBook')
```

|icon|element|
|---|---|
|![](AddressBook.png)|![](AddressBook.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the AddressBook element
include('fontawesome-5.15/Regular/AddressBook')
AddressBook('address_book', 'Address Book', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the AddressBook element
include('fontawesome-5.15/Regular/AddressBook')
AddressBook('address_book', 'Address Book', 'an optional tech field')
@enduml
```

