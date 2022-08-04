# AddressBook


```text
fontawesome-6/Solid/AddressBook
```

```text
include('fontawesome-6/Solid/AddressBook')
```



| Illustration | AddressBook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/AddressBook.png) | ![illustration for AddressBook](../../fontawesome-6/Solid/AddressBook.Local.png) |




## AddressBook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AddressBook
include('fontawesome-6/Solid/AddressBook')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element AddressBook
include('fontawesome-6/Solid/AddressBook')

' renders the element
AddressBook('AddressBook', 'Address Book', 'an optional tech label', 'an optional description')
@enduml
```

