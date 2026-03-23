# Xmpp


```text
fontawesome/Brands/Xmpp
```

```text
include('fontawesome/Brands/Xmpp')
```



| Illustration | Xmpp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Xmpp.png) | ![illustration for Xmpp](../../fontawesome/Brands/Xmpp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$XmppXs>`
- `<$XmppSm>`
- `<$XmppMd>`
- `<$XmppLg>`





## Xmpp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Xmpp
include('fontawesome/Brands/Xmpp')

' renders the element
Xmpp('Xmpp', 'Xmpp', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Xmpp
include('fontawesome/Brands/Xmpp')

' renders the element
Xmpp('Xmpp', 'Xmpp', 'an optional tech label', 'an optional description')
@enduml
```

