# ContactCard


```text
fontawesome/Regular/ContactCard
```

```text
include('fontawesome/Regular/ContactCard')
```



| Illustration | ContactCard |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/ContactCard.png) | ![illustration for ContactCard](../../fontawesome/Regular/ContactCard.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ContactCardXs>`
- `<$ContactCardSm>`
- `<$ContactCardMd>`
- `<$ContactCardLg>`





## ContactCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ContactCard
include('fontawesome/Regular/ContactCard')

' renders the element
ContactCard('ContactCard', 'Contact Card', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ContactCard
include('fontawesome/Regular/ContactCard')

' renders the element
ContactCard('ContactCard', 'Contact Card', 'an optional tech label', 'an optional description')
@enduml
```

