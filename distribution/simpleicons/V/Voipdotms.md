# Voipdotms


```text
simpleicons/V/Voipdotms
```

```text
include('simpleicons/V/Voipdotms')
```



| Illustration | Voipdotms |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Voipdotms.png) | ![illustration for Voipdotms](../../simpleicons/V/Voipdotms.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VoipdotmsXs>`
- `<$VoipdotmsSm>`
- `<$VoipdotmsMd>`
- `<$VoipdotmsLg>`





## Voipdotms

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Voipdotms
include('simpleicons/V/Voipdotms')

' renders the element
Voipdotms('Voipdotms', 'Voipdotms', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Voipdotms
include('simpleicons/V/Voipdotms')

' renders the element
Voipdotms('Voipdotms', 'Voipdotms', 'an optional tech label', 'an optional description')
@enduml
```

