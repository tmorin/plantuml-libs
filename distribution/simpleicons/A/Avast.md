# Avast


```text
simpleicons/A/Avast
```

```text
include('simpleicons/A/Avast')
```



| Illustration | Avast |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Avast.png) | ![illustration for Avast](../../simpleicons/A/Avast.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AvastXs>`
- `<$AvastSm>`
- `<$AvastMd>`
- `<$AvastLg>`





## Avast

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Avast
include('simpleicons/A/Avast')

' renders the element
Avast('Avast', 'Avast', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Avast
include('simpleicons/A/Avast')

' renders the element
Avast('Avast', 'Avast', 'an optional tech label', 'an optional description')
@enduml
```

