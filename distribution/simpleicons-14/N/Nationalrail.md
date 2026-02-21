# Nationalrail


```text
simpleicons-14/N/Nationalrail
```

```text
include('simpleicons-14/N/Nationalrail')
```



| Illustration | Nationalrail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/N/Nationalrail.png) | ![illustration for Nationalrail](../../simpleicons-14/N/Nationalrail.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NationalrailXs>`
- `<$NationalrailSm>`
- `<$NationalrailMd>`
- `<$NationalrailLg>`





## Nationalrail

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Nationalrail
include('simpleicons-14/N/Nationalrail')

' renders the element
Nationalrail('Nationalrail', 'Nationalrail', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nationalrail
include('simpleicons-14/N/Nationalrail')

' renders the element
Nationalrail('Nationalrail', 'Nationalrail', 'an optional tech label', 'an optional description')
@enduml
```

