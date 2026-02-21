# Tildapublishing


```text
simpleicons/T/Tildapublishing
```

```text
include('simpleicons/T/Tildapublishing')
```



| Illustration | Tildapublishing |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tildapublishing.png) | ![illustration for Tildapublishing](../../simpleicons/T/Tildapublishing.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TildapublishingXs>`
- `<$TildapublishingSm>`
- `<$TildapublishingMd>`
- `<$TildapublishingLg>`





## Tildapublishing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tildapublishing
include('simpleicons/T/Tildapublishing')

' renders the element
Tildapublishing('Tildapublishing', 'Tildapublishing', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tildapublishing
include('simpleicons/T/Tildapublishing')

' renders the element
Tildapublishing('Tildapublishing', 'Tildapublishing', 'an optional tech label', 'an optional description')
@enduml
```

