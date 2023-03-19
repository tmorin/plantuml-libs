# Avast


```text
simpleicons-8/A/Avast
```

```text
include('simpleicons-8/A/Avast')
```



| Illustration | Avast |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Avast.png) | ![illustration for Avast](../../simpleicons-8/A/Avast.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Avast
include('simpleicons-8/A/Avast')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Avast
include('simpleicons-8/A/Avast')

' renders the element
Avast('Avast', 'Avast', 'an optional tech label', 'an optional description')
@enduml
```

