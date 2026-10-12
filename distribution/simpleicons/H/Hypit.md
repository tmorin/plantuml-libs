# Hypit


```text
simpleicons/H/Hypit
```

```text
include('simpleicons/H/Hypit')
```



| Illustration | Hypit |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hypit.png) | ![illustration for Hypit](../../simpleicons/H/Hypit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HypitXs>`
- `<$HypitSm>`
- `<$HypitMd>`
- `<$HypitLg>`





## Hypit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hypit
include('simpleicons/H/Hypit')

' renders the element
Hypit('Hypit', 'Hypit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hypit
include('simpleicons/H/Hypit')

' renders the element
Hypit('Hypit', 'Hypit', 'an optional tech label', 'an optional description')
@enduml
```

