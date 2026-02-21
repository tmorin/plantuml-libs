# Jhipster


```text
simpleicons/J/Jhipster
```

```text
include('simpleicons/J/Jhipster')
```



| Illustration | Jhipster |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/J/Jhipster.png) | ![illustration for Jhipster](../../simpleicons/J/Jhipster.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JhipsterXs>`
- `<$JhipsterSm>`
- `<$JhipsterMd>`
- `<$JhipsterLg>`





## Jhipster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Jhipster
include('simpleicons/J/Jhipster')

' renders the element
Jhipster('Jhipster', 'Jhipster', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Jhipster
include('simpleicons/J/Jhipster')

' renders the element
Jhipster('Jhipster', 'Jhipster', 'an optional tech label', 'an optional description')
@enduml
```

