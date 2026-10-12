# Simpleiconscdn


```text
simpleicons/S/Simpleiconscdn
```

```text
include('simpleicons/S/Simpleiconscdn')
```



| Illustration | Simpleiconscdn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Simpleiconscdn.png) | ![illustration for Simpleiconscdn](../../simpleicons/S/Simpleiconscdn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SimpleiconscdnXs>`
- `<$SimpleiconscdnSm>`
- `<$SimpleiconscdnMd>`
- `<$SimpleiconscdnLg>`





## Simpleiconscdn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Simpleiconscdn
include('simpleicons/S/Simpleiconscdn')

' renders the element
Simpleiconscdn('Simpleiconscdn', 'Simpleiconscdn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Simpleiconscdn
include('simpleicons/S/Simpleiconscdn')

' renders the element
Simpleiconscdn('Simpleiconscdn', 'Simpleiconscdn', 'an optional tech label', 'an optional description')
@enduml
```

