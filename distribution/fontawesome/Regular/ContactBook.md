# ContactBook


```text
fontawesome/Regular/ContactBook
```

```text
include('fontawesome/Regular/ContactBook')
```



| Illustration | ContactBook |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/ContactBook.png) | ![illustration for ContactBook](../../fontawesome/Regular/ContactBook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContactBookXs>`
- `<$ContactBookSm>`
- `<$ContactBookMd>`
- `<$ContactBookLg>`





## ContactBook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ContactBook
include('fontawesome/Regular/ContactBook')

' renders the element
ContactBook('ContactBook', 'Contact Book', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ContactBook
include('fontawesome/Regular/ContactBook')

' renders the element
ContactBook('ContactBook', 'Contact Book', 'an optional tech label', 'an optional description')
@enduml
```

