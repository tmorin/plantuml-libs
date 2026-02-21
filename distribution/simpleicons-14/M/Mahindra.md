# Mahindra


```text
simpleicons-14/M/Mahindra
```

```text
include('simpleicons-14/M/Mahindra')
```



| Illustration | Mahindra |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mahindra.png) | ![illustration for Mahindra](../../simpleicons-14/M/Mahindra.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MahindraXs>`
- `<$MahindraSm>`
- `<$MahindraMd>`
- `<$MahindraLg>`





## Mahindra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mahindra
include('simpleicons-14/M/Mahindra')

' renders the element
Mahindra('Mahindra', 'Mahindra', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mahindra
include('simpleicons-14/M/Mahindra')

' renders the element
Mahindra('Mahindra', 'Mahindra', 'an optional tech label', 'an optional description')
@enduml
```

