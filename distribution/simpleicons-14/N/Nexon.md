# Nexon


```text
simpleicons-14/N/Nexon
```

```text
include('simpleicons-14/N/Nexon')
```



| Illustration | Nexon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nexon.png) | ![illustration for Nexon](../../simpleicons-14/N/Nexon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NexonXs>`
- `<$NexonSm>`
- `<$NexonMd>`
- `<$NexonLg>`





## Nexon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nexon
include('simpleicons-14/N/Nexon')

' renders the element
Nexon('Nexon', 'Nexon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nexon
include('simpleicons-14/N/Nexon')

' renders the element
Nexon('Nexon', 'Nexon', 'an optional tech label', 'an optional description')
@enduml
```

