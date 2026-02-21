# Falco


```text
simpleicons/F/Falco
```

```text
include('simpleicons/F/Falco')
```



| Illustration | Falco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Falco.png) | ![illustration for Falco](../../simpleicons/F/Falco.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FalcoXs>`
- `<$FalcoSm>`
- `<$FalcoMd>`
- `<$FalcoLg>`





## Falco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Falco
include('simpleicons/F/Falco')

' renders the element
Falco('Falco', 'Falco', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Falco
include('simpleicons/F/Falco')

' renders the element
Falco('Falco', 'Falco', 'an optional tech label', 'an optional description')
@enduml
```

