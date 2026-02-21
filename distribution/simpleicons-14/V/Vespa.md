# Vespa


```text
simpleicons-14/V/Vespa
```

```text
include('simpleicons-14/V/Vespa')
```



| Illustration | Vespa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Vespa.png) | ![illustration for Vespa](../../simpleicons-14/V/Vespa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VespaXs>`
- `<$VespaSm>`
- `<$VespaMd>`
- `<$VespaLg>`





## Vespa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Vespa
include('simpleicons-14/V/Vespa')

' renders the element
Vespa('Vespa', 'Vespa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vespa
include('simpleicons-14/V/Vespa')

' renders the element
Vespa('Vespa', 'Vespa', 'an optional tech label', 'an optional description')
@enduml
```

