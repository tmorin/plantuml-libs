# Vorondesign


```text
simpleicons/V/Vorondesign
```

```text
include('simpleicons/V/Vorondesign')
```



| Illustration | Vorondesign |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vorondesign.png) | ![illustration for Vorondesign](../../simpleicons/V/Vorondesign.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VorondesignXs>`
- `<$VorondesignSm>`
- `<$VorondesignMd>`
- `<$VorondesignLg>`





## Vorondesign

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vorondesign
include('simpleicons/V/Vorondesign')

' renders the element
Vorondesign('Vorondesign', 'Vorondesign', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vorondesign
include('simpleicons/V/Vorondesign')

' renders the element
Vorondesign('Vorondesign', 'Vorondesign', 'an optional tech label', 'an optional description')
@enduml
```

