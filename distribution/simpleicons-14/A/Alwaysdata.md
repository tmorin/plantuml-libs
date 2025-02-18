# Alwaysdata


```text
simpleicons-14/A/Alwaysdata
```

```text
include('simpleicons-14/A/Alwaysdata')
```



| Illustration | Alwaysdata |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Alwaysdata.png) | ![illustration for Alwaysdata](../../simpleicons-14/A/Alwaysdata.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlwaysdataXs>`
- `<$AlwaysdataSm>`
- `<$AlwaysdataMd>`
- `<$AlwaysdataLg>`





## Alwaysdata

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alwaysdata
include('simpleicons-14/A/Alwaysdata')

' renders the element
Alwaysdata('Alwaysdata', 'Alwaysdata', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alwaysdata
include('simpleicons-14/A/Alwaysdata')

' renders the element
Alwaysdata('Alwaysdata', 'Alwaysdata', 'an optional tech label', 'an optional description')
@enduml
```

