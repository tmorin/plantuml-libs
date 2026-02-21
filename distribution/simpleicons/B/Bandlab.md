# Bandlab


```text
simpleicons/B/Bandlab
```

```text
include('simpleicons/B/Bandlab')
```



| Illustration | Bandlab |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Bandlab.png) | ![illustration for Bandlab](../../simpleicons/B/Bandlab.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BandlabXs>`
- `<$BandlabSm>`
- `<$BandlabMd>`
- `<$BandlabLg>`





## Bandlab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Bandlab
include('simpleicons/B/Bandlab')

' renders the element
Bandlab('Bandlab', 'Bandlab', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bandlab
include('simpleicons/B/Bandlab')

' renders the element
Bandlab('Bandlab', 'Bandlab', 'an optional tech label', 'an optional description')
@enduml
```

