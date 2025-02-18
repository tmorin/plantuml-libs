# Mta


```text
simpleicons-14/M/Mta
```

```text
include('simpleicons-14/M/Mta')
```



| Illustration | Mta |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mta.png) | ![illustration for Mta](../../simpleicons-14/M/Mta.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MtaXs>`
- `<$MtaSm>`
- `<$MtaMd>`
- `<$MtaLg>`





## Mta

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mta
include('simpleicons-14/M/Mta')

' renders the element
Mta('Mta', 'Mta', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mta
include('simpleicons-14/M/Mta')

' renders the element
Mta('Mta', 'Mta', 'an optional tech label', 'an optional description')
@enduml
```

