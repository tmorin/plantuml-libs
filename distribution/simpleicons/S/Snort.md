# Snort


```text
simpleicons/S/Snort
```

```text
include('simpleicons/S/Snort')
```



| Illustration | Snort |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Snort.png) | ![illustration for Snort](../../simpleicons/S/Snort.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SnortXs>`
- `<$SnortSm>`
- `<$SnortMd>`
- `<$SnortLg>`





## Snort

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Snort
include('simpleicons/S/Snort')

' renders the element
Snort('Snort', 'Snort', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Snort
include('simpleicons/S/Snort')

' renders the element
Snort('Snort', 'Snort', 'an optional tech label', 'an optional description')
@enduml
```

