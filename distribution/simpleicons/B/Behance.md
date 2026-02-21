# Behance


```text
simpleicons/B/Behance
```

```text
include('simpleicons/B/Behance')
```



| Illustration | Behance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Behance.png) | ![illustration for Behance](../../simpleicons/B/Behance.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BehanceXs>`
- `<$BehanceSm>`
- `<$BehanceMd>`
- `<$BehanceLg>`





## Behance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Behance
include('simpleicons/B/Behance')

' renders the element
Behance('Behance', 'Behance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Behance
include('simpleicons/B/Behance')

' renders the element
Behance('Behance', 'Behance', 'an optional tech label', 'an optional description')
@enduml
```

