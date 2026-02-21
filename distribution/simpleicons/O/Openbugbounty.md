# Openbugbounty


```text
simpleicons/O/Openbugbounty
```

```text
include('simpleicons/O/Openbugbounty')
```



| Illustration | Openbugbounty |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Openbugbounty.png) | ![illustration for Openbugbounty](../../simpleicons/O/Openbugbounty.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpenbugbountyXs>`
- `<$OpenbugbountySm>`
- `<$OpenbugbountyMd>`
- `<$OpenbugbountyLg>`





## Openbugbounty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Openbugbounty
include('simpleicons/O/Openbugbounty')

' renders the element
Openbugbounty('Openbugbounty', 'Openbugbounty', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Openbugbounty
include('simpleicons/O/Openbugbounty')

' renders the element
Openbugbounty('Openbugbounty', 'Openbugbounty', 'an optional tech label', 'an optional description')
@enduml
```

