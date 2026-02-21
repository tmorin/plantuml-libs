# Awesomelists


```text
simpleicons/A/Awesomelists
```

```text
include('simpleicons/A/Awesomelists')
```



| Illustration | Awesomelists |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Awesomelists.png) | ![illustration for Awesomelists](../../simpleicons/A/Awesomelists.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwesomelistsXs>`
- `<$AwesomelistsSm>`
- `<$AwesomelistsMd>`
- `<$AwesomelistsLg>`





## Awesomelists

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Awesomelists
include('simpleicons/A/Awesomelists')

' renders the element
Awesomelists('Awesomelists', 'Awesomelists', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Awesomelists
include('simpleicons/A/Awesomelists')

' renders the element
Awesomelists('Awesomelists', 'Awesomelists', 'an optional tech label', 'an optional description')
@enduml
```

