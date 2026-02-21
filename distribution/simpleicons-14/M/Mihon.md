# Mihon


```text
simpleicons-14/M/Mihon
```

```text
include('simpleicons-14/M/Mihon')
```



| Illustration | Mihon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Mihon.png) | ![illustration for Mihon](../../simpleicons-14/M/Mihon.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mihon
include('simpleicons-14/M/Mihon')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Mihon
include('simpleicons-14/M/Mihon')

' renders the element
Mihon('Mihon', 'Mihon', 'an optional tech label', 'an optional description')
@enduml
```

