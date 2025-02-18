# Tryhackme


```text
simpleicons-14/T/Tryhackme
```

```text
include('simpleicons-14/T/Tryhackme')
```



| Illustration | Tryhackme |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tryhackme.png) | ![illustration for Tryhackme](../../simpleicons-14/T/Tryhackme.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TryhackmeXs>`
- `<$TryhackmeSm>`
- `<$TryhackmeMd>`
- `<$TryhackmeLg>`





## Tryhackme

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tryhackme
include('simpleicons-14/T/Tryhackme')

' renders the element
Tryhackme('Tryhackme', 'Tryhackme', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tryhackme
include('simpleicons-14/T/Tryhackme')

' renders the element
Tryhackme('Tryhackme', 'Tryhackme', 'an optional tech label', 'an optional description')
@enduml
```

