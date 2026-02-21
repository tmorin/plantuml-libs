# Downdetector


```text
simpleicons-14/D/Downdetector
```

```text
include('simpleicons-14/D/Downdetector')
```



| Illustration | Downdetector |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Downdetector.png) | ![illustration for Downdetector](../../simpleicons-14/D/Downdetector.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DowndetectorXs>`
- `<$DowndetectorSm>`
- `<$DowndetectorMd>`
- `<$DowndetectorLg>`





## Downdetector

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Downdetector
include('simpleicons-14/D/Downdetector')

' renders the element
Downdetector('Downdetector', 'Downdetector', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Downdetector
include('simpleicons-14/D/Downdetector')

' renders the element
Downdetector('Downdetector', 'Downdetector', 'an optional tech label', 'an optional description')
@enduml
```

