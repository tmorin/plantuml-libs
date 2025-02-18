# Mastercomfig


```text
simpleicons-14/M/Mastercomfig
```

```text
include('simpleicons-14/M/Mastercomfig')
```



| Illustration | Mastercomfig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mastercomfig.png) | ![illustration for Mastercomfig](../../simpleicons-14/M/Mastercomfig.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MastercomfigXs>`
- `<$MastercomfigSm>`
- `<$MastercomfigMd>`
- `<$MastercomfigLg>`





## Mastercomfig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mastercomfig
include('simpleicons-14/M/Mastercomfig')

' renders the element
Mastercomfig('Mastercomfig', 'Mastercomfig', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mastercomfig
include('simpleicons-14/M/Mastercomfig')

' renders the element
Mastercomfig('Mastercomfig', 'Mastercomfig', 'an optional tech label', 'an optional description')
@enduml
```

