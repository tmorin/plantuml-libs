# Ifttt


```text
simpleicons/I/Ifttt
```

```text
include('simpleicons/I/Ifttt')
```



| Illustration | Ifttt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/I/Ifttt.png) | ![illustration for Ifttt](../../simpleicons/I/Ifttt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IftttXs>`
- `<$IftttSm>`
- `<$IftttMd>`
- `<$IftttLg>`





## Ifttt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Ifttt
include('simpleicons/I/Ifttt')

' renders the element
Ifttt('Ifttt', 'Ifttt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ifttt
include('simpleicons/I/Ifttt')

' renders the element
Ifttt('Ifttt', 'Ifttt', 'an optional tech label', 'an optional description')
@enduml
```

