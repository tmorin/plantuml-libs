# Clubforce


```text
simpleicons/C/Clubforce
```

```text
include('simpleicons/C/Clubforce')
```



| Illustration | Clubforce |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/C/Clubforce.png) | ![illustration for Clubforce](../../simpleicons/C/Clubforce.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClubforceXs>`
- `<$ClubforceSm>`
- `<$ClubforceMd>`
- `<$ClubforceLg>`





## Clubforce

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Clubforce
include('simpleicons/C/Clubforce')

' renders the element
Clubforce('Clubforce', 'Clubforce', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clubforce
include('simpleicons/C/Clubforce')

' renders the element
Clubforce('Clubforce', 'Clubforce', 'an optional tech label', 'an optional description')
@enduml
```

