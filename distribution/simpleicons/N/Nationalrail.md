# Nationalrail


```text
simpleicons/N/Nationalrail
```

```text
include('simpleicons/N/Nationalrail')
```



| Illustration | Nationalrail |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/N/Nationalrail.png) | ![illustration for Nationalrail](../../simpleicons/N/Nationalrail.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nationalrail
include('simpleicons/N/Nationalrail')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Nationalrail
include('simpleicons/N/Nationalrail')

' renders the element
Nationalrail('Nationalrail', 'Nationalrail', 'an optional tech label', 'an optional description')
@enduml
```

