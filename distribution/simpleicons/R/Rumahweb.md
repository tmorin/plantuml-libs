# Rumahweb


```text
simpleicons/R/Rumahweb
```

```text
include('simpleicons/R/Rumahweb')
```



| Illustration | Rumahweb |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rumahweb.png) | ![illustration for Rumahweb](../../simpleicons/R/Rumahweb.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RumahwebXs>`
- `<$RumahwebSm>`
- `<$RumahwebMd>`
- `<$RumahwebLg>`





## Rumahweb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rumahweb
include('simpleicons/R/Rumahweb')

' renders the element
Rumahweb('Rumahweb', 'Rumahweb', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rumahweb
include('simpleicons/R/Rumahweb')

' renders the element
Rumahweb('Rumahweb', 'Rumahweb', 'an optional tech label', 'an optional description')
@enduml
```

