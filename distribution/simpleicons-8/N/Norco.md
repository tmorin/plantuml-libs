# Norco


```text
simpleicons-8/N/Norco
```

```text
include('simpleicons-8/N/Norco')
```



| Illustration | Norco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/N/Norco.png) | ![illustration for Norco](../../simpleicons-8/N/Norco.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NorcoXs>`
- `<$NorcoSm>`
- `<$NorcoMd>`
- `<$NorcoLg>`





## Norco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Norco
include('simpleicons-8/N/Norco')

' renders the element
Norco('Norco', 'Norco', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Norco
include('simpleicons-8/N/Norco')

' renders the element
Norco('Norco', 'Norco', 'an optional tech label', 'an optional description')
@enduml
```

