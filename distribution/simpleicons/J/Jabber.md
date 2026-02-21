# Jabber


```text
simpleicons/J/Jabber
```

```text
include('simpleicons/J/Jabber')
```



| Illustration | Jabber |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jabber.png) | ![illustration for Jabber](../../simpleicons/J/Jabber.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JabberXs>`
- `<$JabberSm>`
- `<$JabberMd>`
- `<$JabberLg>`





## Jabber

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jabber
include('simpleicons/J/Jabber')

' renders the element
Jabber('Jabber', 'Jabber', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jabber
include('simpleicons/J/Jabber')

' renders the element
Jabber('Jabber', 'Jabber', 'an optional tech label', 'an optional description')
@enduml
```

