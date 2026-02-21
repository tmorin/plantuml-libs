# Suse


```text
simpleicons/S/Suse
```

```text
include('simpleicons/S/Suse')
```



| Illustration | Suse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Suse.png) | ![illustration for Suse](../../simpleicons/S/Suse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SuseXs>`
- `<$SuseSm>`
- `<$SuseMd>`
- `<$SuseLg>`





## Suse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Suse
include('simpleicons/S/Suse')

' renders the element
Suse('Suse', 'Suse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Suse
include('simpleicons/S/Suse')

' renders the element
Suse('Suse', 'Suse', 'an optional tech label', 'an optional description')
@enduml
```

