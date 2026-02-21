# Mihon


```text
simpleicons/M/Mihon
```

```text
include('simpleicons/M/Mihon')
```



| Illustration | Mihon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mihon.png) | ![illustration for Mihon](../../simpleicons/M/Mihon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MihonXs>`
- `<$MihonSm>`
- `<$MihonMd>`
- `<$MihonLg>`





## Mihon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mihon
include('simpleicons/M/Mihon')

' renders the element
Mihon('Mihon', 'Mihon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mihon
include('simpleicons/M/Mihon')

' renders the element
Mihon('Mihon', 'Mihon', 'an optional tech label', 'an optional description')
@enduml
```

