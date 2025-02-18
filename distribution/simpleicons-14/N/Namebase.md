# Namebase


```text
simpleicons-14/N/Namebase
```

```text
include('simpleicons-14/N/Namebase')
```



| Illustration | Namebase |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Namebase.png) | ![illustration for Namebase](../../simpleicons-14/N/Namebase.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NamebaseXs>`
- `<$NamebaseSm>`
- `<$NamebaseMd>`
- `<$NamebaseLg>`





## Namebase

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Namebase
include('simpleicons-14/N/Namebase')

' renders the element
Namebase('Namebase', 'Namebase', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Namebase
include('simpleicons-14/N/Namebase')

' renders the element
Namebase('Namebase', 'Namebase', 'an optional tech label', 'an optional description')
@enduml
```

