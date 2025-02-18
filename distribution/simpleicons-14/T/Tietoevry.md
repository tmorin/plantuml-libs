# Tietoevry


```text
simpleicons-14/T/Tietoevry
```

```text
include('simpleicons-14/T/Tietoevry')
```



| Illustration | Tietoevry |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tietoevry.png) | ![illustration for Tietoevry](../../simpleicons-14/T/Tietoevry.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TietoevryXs>`
- `<$TietoevrySm>`
- `<$TietoevryMd>`
- `<$TietoevryLg>`





## Tietoevry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tietoevry
include('simpleicons-14/T/Tietoevry')

' renders the element
Tietoevry('Tietoevry', 'Tietoevry', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tietoevry
include('simpleicons-14/T/Tietoevry')

' renders the element
Tietoevry('Tietoevry', 'Tietoevry', 'an optional tech label', 'an optional description')
@enduml
```

