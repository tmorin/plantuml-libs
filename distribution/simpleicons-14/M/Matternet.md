# Matternet


```text
simpleicons-14/M/Matternet
```

```text
include('simpleicons-14/M/Matternet')
```



| Illustration | Matternet |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Matternet.png) | ![illustration for Matternet](../../simpleicons-14/M/Matternet.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MatternetXs>`
- `<$MatternetSm>`
- `<$MatternetMd>`
- `<$MatternetLg>`





## Matternet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Matternet
include('simpleicons-14/M/Matternet')

' renders the element
Matternet('Matternet', 'Matternet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Matternet
include('simpleicons-14/M/Matternet')

' renders the element
Matternet('Matternet', 'Matternet', 'an optional tech label', 'an optional description')
@enduml
```

