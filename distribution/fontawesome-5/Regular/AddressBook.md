# AddressBook


```text
fontawesome-5/Regular/AddressBook
```

```text
include('fontawesome-5/Regular/AddressBook')
```



| Illustration | AddressBook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/AddressBook.png) | ![illustration for AddressBook](../../fontawesome-5/Regular/AddressBook.Local.png) |




## AddressBook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AddressBook
include('fontawesome-5/Regular/AddressBook')

' renders the element
AddressBook('AddressBook', 'Address Book', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element AddressBook
include('fontawesome-5/Regular/AddressBook')

' renders the element
AddressBook('AddressBook', 'Address Book', 'an optional tech label')
@enduml
```

